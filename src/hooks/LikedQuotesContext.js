import React, {createContext} from "react";
import PropTypes from "prop-types";

export const LikedQuotesContext = createContext();

export function LikedQuotesWrapper({children, likeUtils}) {
    return (
        <LikedQuotesContext.Provider value={likeUtils}>
            {children}
        </LikedQuotesContext.Provider>
    )
}

LikedQuotesWrapper.propTypes = {
    children: PropTypes.node,
    likeUtils: PropTypes.object,
}
