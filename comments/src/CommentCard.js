import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


const CommentCard = ({imageUrl, userName, datePosted, children}) => {

    const CommentFigure = styled.figure`
        background-color: lightgray;
        display: flex;
    `

    const CommentButton = styled.button`
        border: none;
        background: none;
        text-decoration: underline;
        color: blue;
    `

    const CommentList = styled.li`
        list-style: none;
    `

    return ( 
        <CommentList>
            <CommentFigure>
                <img src={imageUrl} alt="I'm broken" height="100" width="100"/>
                <section>
                    <cite>{userName}</cite>
                    <p>{children}</p>
                    <p>
                        <CommentButton>Like</CommentButton>
                        <CommentButton>Reply</CommentButton>
                        <span>{dayjs(datePosted).toNow(true)}</span>
                    </p>
                </section>
            </CommentFigure>
        </CommentList>

     );
}
 
export default CommentCard;