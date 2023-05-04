function Image(imageData) {
  const imageUrl = imageData.media_url ?? "";
  const mediaType = imageData.media_type ?? "";
  const caption = imageData.caption ?? "";
  const link = imageData.permalink ?? "";

  if (mediaType === 'CAROUSEL_ALBUM' || mediaType === 'IMAGE') {
    return (
      <div className={"col-lg-4 col-sm-12"} key={imageData.id ?? 0}>
        <div className={"image-container"}>
          <a href={link} target={"_blank"} key={imageUrl}>
            <img src={imageUrl} alt="" className={"image"}/>
          </a>
          <span className={"image-caption"}>{caption}</span>
        </div>
      </div>
    );
  }
}

export default Image;