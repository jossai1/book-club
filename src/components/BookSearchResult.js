import React from 'react';
import PropTypes from 'prop-types';

/*returns a X # of stars where X is the number supplied*/
const StarRating = ({starsToDisplay}) => new Array(Math.floor(starsToDisplay)).fill(0).map((key, index) => <span key={index}>⭐️</span>);

const RatingComponent = ({averageRating}) =>
    <>
        <StarRating starsToDisplay={averageRating}/>
        <span>{averageRating} rating</span>
    </>;

function BookSearchResult(props) {
    const {volumeInfo, saleInfo, searchInfo} = props;
    const {title, subtitle, authors, description, categories, imageLinks, averageRating} = volumeInfo;
    const {retailPrice, buyLink} = saleInfo;

    return (
        <>
            <div>
                <img src={imageLinks?.smallThumbnail} alt={`${title} book cover`}/>
                <div className={'metaData'}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <h4>{authors?.join(',')}</h4>
                    <span>{categories?.join(',')} ·  </span>
                    {retailPrice && <span>£{retailPrice.amount} ·  </span>}
                    {buyLink && <a href={buyLink} rel="noreferrer" target='_blank'>Purchase Now</a>}
                    · {averageRating && <RatingComponent averageRating={averageRating}/>}
                </div>
                <p dangerouslySetInnerHTML={{__html: searchInfo?.textSnippet}}></p>
                <details>
                    <summary>Read Summary</summary>
                    <p>{description}</p>
                </details>
                <hr/>
            </div>
        </>
    )
}

BookSearchResult.propTypes = {
    volumeInfo: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        authors: PropTypes.array,
        description: PropTypes.string,
        categories: PropTypes.array,
        imageLinks: PropTypes.object,
        averageRating: PropTypes.number
    }),
    saleInfo: PropTypes.shape({
        retailPrice: PropTypes.shape({
            amount: PropTypes.number
        }),
        buyLink: PropTypes.string
    }),
    searchInfo: PropTypes.shape({
        textSnippet: PropTypes.string,
        fontSize: PropTypes.number
    })
}

RatingComponent.propTypes = {
    averageRating: PropTypes.number
}

export default BookSearchResult;
