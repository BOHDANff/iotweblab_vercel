import React, {useContext} from "react";

const FeedbackContext = React.createContext()

export const useFeedback = () => {
    return useContext(FeedbackContext)
}

export const FeedbackProvider = ({children, ...props}) => {
  return (
      <FeedbackContext.Provider {...props}>
          {children}
      </FeedbackContext.Provider>
  )
}