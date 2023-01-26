export default function BookSearchResult(props) {
    const {volumeInfo, saleInfo, searchInfo} = props;
    const {title, subtitle, authors, description, categories, imageLinks} = volumeInfo;
    const {retailPrice, buyLink} = saleInfo;
    // const {smallThumbnail} = imageLinks;

    return (
        <>
           <div>
               <img src={imageLinks?.smallThumbnail} alt={`${title} book cover image`}/>
               <div className={'metaData'}>
                   <h2>{title}</h2>
                   <h3>{subtitle}</h3>
                   <h4>{authors?.join(',')}</h4>
                   <span>{categories?.join(',')} ·  </span>
                   { retailPrice && <span>£{retailPrice.amount} ·  </span>}
                   { buyLink && <a href={buyLink} target='_blank'>Purchase Now</a>}
               </div>
               <p dangerouslySetInnerHTML={{__html: searchInfo?.textSnippet}}></p>
               {/*<p>{description}</p>*/}
               <hr/>
           </div>
        </>
    )
}
