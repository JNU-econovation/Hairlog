/**
*@swagger
*paths: 
*  /api/swagger/authenticate :
*    get:
*      tags: [Login]
*      summary: 로그인 페이지
*      responses:
*        "200":
*          description: 로그인 페이지 로드 성공
*    post:
*      tags: [Login]
*      summary: 로그인 요청
*      requestBody:
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*               userEmail:
*                 type: string
*                 example: nanakim@gmail.com
*               userPassword:
*                 type: string
*                 example: 1234
*              required: true
*      responses:
*        "201":
*          description: 로그인 요청 성공
*/