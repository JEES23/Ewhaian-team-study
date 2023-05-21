//다른 부분 구현은 다음에

import Favorite from "./Sections/Favorite"

// Body
<div style={{display: 'flex', justifyContent: 'flex-end'}}>
    <Favorite   movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')}/>
</div>  