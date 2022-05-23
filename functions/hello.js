// functions/hello.js
export async function handler(event) {
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      data:{
        name:'Pietro'
      }
    }),
  }
}
