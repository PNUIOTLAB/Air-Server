import { useEffect, useState } from 'react';
import axios from 'axios';

function useRequest(get_post,url,callback_req,params_req) {
  const callback = (callback_req!=undefined) ? callback_req:function(){};
  const params = (params_req!=undefined) ? params_req:null;
  // loading, response, error 값을 다루는 hooks
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);
  const [error, setError] = useState(null);

  
  // 렌더링 될 때, 그리고 url 이 바뀔때만 실행됨
  useEffect(
    async () => {
      console.log("custom hook");
      setError(null); // 에러 null 처리
      try {
        setLoading(true); // 로딩중
        const res = (get_post=='get')?await axios.get(url):await axios.post(url,params); // 실제 요청
        callback();
        console.log("In custom hook : ",res.data);
        setData(res.data); // response 설정
      } catch (e) {
        setError(e); // error 설정
      }
      setLoading(false); // 로딩 끝
    },
    [url] // url 이 바뀔때만 실행됨
  );
  
  return [Data, loading, error]; // 현재 값들을 배열로 반환
}

export default useRequest;


// Post example

// import React from 'react';
// import useRequest from './hooks/useRequest';

// const Post = () => {
//   const [response, loading, error] = useRequest(
//     'https://jsonplaceholder.typicode.com/posts/1','post',function(){console.log("complete")},
//      {ROOM:101}
//   );

//   if (loading) {
//     return <div>로딩중..</div>;
//   }

//   if (error) {
//     return <div>에러 발생!</div>;
//   }

//   /*
//     컴포넌트가 가장 처음 마운트 되는 시점은, Request 가 시작되지 않았으므로
//     loading 이 false 이면서 response 도 null 이기에
//     response null 체킹 필요 
//   */
//   if (!response) return null;

//   const { title, body } = response.data;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{body}</p>
//     </div>
//   );
// };

// export default Post;



// Get example

// import React from 'react';
// import useRequest from './hooks/useRequest';

// const t = () => {
//   const [response, loading, error] = useRequest(
//     'https://jsonplaceholder.typicode.com/posts/1','post',function(){console.log("complete")},
//     {room:101}
//   );

//   if (loading) {
//     return <div>로딩중..</div>;
//   }

//   if (error) {
//     return <div>에러 발생!</div>;
//   }

//   /*
//     컴포넌트가 가장 처음 마운트 되는 시점은, Request 가 시작되지 않았으므로
//     loading 이 false 이면서 response 도 null 이기에
//     response null 체킹 필요 
//   */
//   if (!response) return null;

//   const { title, body } = response.data;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{body}</p>
//     </div>
//   );
// };

// export default Post;