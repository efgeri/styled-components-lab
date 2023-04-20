import styled from "styled-components"

const Quote = ({by, source, children}) => {
    const QuoteText = styled.blockquote`
    font-style: italic;
    color: red;
    background-color: #E6E6E6;
    border-radius: 5px;
    padding: 5px
    `
    const QuoteFigure = styled.figure`
    border: 2px solid black;
    `
      return ( 
        
        <QuoteFigure>
            <QuoteText cite={source}>
               {children}
            </QuoteText>
            <figcaption>
                <cite>
                    -{by}
                </cite>
            </figcaption>
        </QuoteFigure>
         );
}

 
export default Quote;






