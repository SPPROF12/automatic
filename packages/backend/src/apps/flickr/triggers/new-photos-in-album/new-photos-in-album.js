const extraFields = [
  'license',
  'date_upload',
  'date_taken',
  'owner_name',
  'icon_server',
  'original_format',
  'last_update',
  'geo',
  'tags',
  'machine_tags',
  'o_dims',
  'views',
  'media',
  'path_alias',
  'url_sq',
  'url_t',
  'url_s',
  'url_m',
  'url_o',
].join(',');

const newPhotosInAlbum = async ($) => {
  let page = 1;
  let pages = 1;

  do {
    try {
      const params = {
        page,
        per_page: 11,
        user_id: $.auth.data.userId,
        extras: extraFields,
        photoset_id: $.step.parameters.album,
        method: 'flickr.photosets.getPhotos',
        format: 'json',
        nojsoncallback: 1,
      };
      const response = await $.http.get('/rest', { params });
      const { photoset } = response.data;
      page = photoset.page + 1;
      pages = photoset.pages;

      for (const photo of photoset.photo) {
        console.log(`Processing photo ${photo.id}`);
        $.pushTriggerItem({
          raw: photo,
          meta: {
            internalId: photo.id,
          },
        });
      }
    } catch (error) {
      console.error(`Error fetching photos: ${error.message}`);
    }
  } while (page <= pages);
};

export default newPhotosInAlbum;
