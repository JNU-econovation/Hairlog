/**
 * @swagger
*paths:
*  /api/swagger/record/cut :
*    post:
*      tags: [Record]
*      summary: Cut 기록 요청
*      consume: multipart/form-data
*      produces: application/json
*      requestBody:
*        content:
*          multipart/form-data:
*            schema:
*              type: object
*              properties:
*                Image:
*                  type: string
*                  format: base64
*                recordGrade:
*                  type: integer
*                  example: 3
*                recordDate:
*                  type: string
*                  example: 2022-06-23
*                designerName:
*                  type: string
*                  example: 미라클
*                recordCost:
*                  type: integer
*                  example: 30000
*                cutName:
*                  type: string
*                  example: cutNameTest
*                cutLength:
*                  type: integer
*                  example: 10
*                recordEtc: 
*                  type: string
*                  example: etcTest
*      responses:
*        "200":
*          description: "successful operation"
*  /api/swagger/record/perm :
*    post:
*      tags: [Record]
*      summary: Perm 기록 요청
*      consume: multipart/form-data
*      produces: application/json
*      requestBody:
*        content:
*          multipart/form-data:
*            schema:
*              type: object
*              properties:
*                Image:
*                  type: string
*                  format: base64
*                recordGrade:
*                  type: integer
*                  example: 3
*                recordDate:
*                  type: string
*                  example: 2022-06-23
*                designerName:
*                  type: string
*                  example: 미라클
*                recordCost:
*                  type: integer
*                  example: 30000
*                permName:
*                  type: string
*                  example: permNameTest
*                permTime:
*                  type: integer
*                  example: 3
*                permHurt:
*                  type: integer
*                  example: 2
*                recordEtc:  
*                  type: string 
*                  example: etcTest
*      responses:
*        "200":
*          description: "successful operation"
*  /api/swagger/record/dyeing :
*    post:
*      tags: [Record]
*      summary: Dyeing 기록 요청
*      consume: multipart/form-data
*      produces: application/json
*      requestBody:
*        content:
*          multipart/form-data:
*            schema:
*              type: object
*              properties:
*                Image:
*                  type: string
*                  format: base64
*                recordGrade:
*                  type: integer
*                  example: 3
*                recordDate:
*                  type: string
*                  example: 2022-06-23
*                designerName:
*                  type: string
*                  example: 미라클
*                recordCost:
*                  type: integer
*                  example: 30000
*                dyeingColor:
*                  type: string
*                  example: dyeingColor
*                dyeingDecolorization:
*                  type: integer
*                  example: 3
*                dyeingTime:
*                  type: integer
*                  example: 2
*                dyeingHurt:
*                  type: integer
*                  example: 2
*                recordEtc:  
*                  type: string 
*                  example: etcTest
*      responses:
*        "200":
*          description: "successful operation"
*  /api/swagger/recordDelete :
*    post:
*      tags: [Record]
*      summary: 기록 삭제 요청
*      consume: multipart/form-data
*      produces: application/json
*      requestBody:
*        content:
*          application/x-www-form-urlencoded:
*            schema:
*              type: object
*              properties:
*                RecordId:
*                  type: integer
*                category:
*                  type: string
*      responses:
*        "200":
*          description: "successful operation"
*  /api/swagger/recordUpdate/cut :
*    post:
*      tags: [Record]
*      summary: Cut 기록 수정 요청
*      consume: multipart/form-data
*      produces: application/json
*      requestBody:
*        content:
*          multipart/form-data:
*            schema:
*              type: object
*              properties:
*                RecordId:
*                  type: integer
*                Image:
*                  type: string
*                  format: base64
*                recordGrade:
*                  type: integer
*                  example: 3
*                recordDate:
*                  type: string
*                  example: 2022-06-23
*                designerName:
*                  type: string
*                  example: 미라클
*                recordCost:
*                  type: integer
*                  example: 30000
*                cutName:
*                  type: string
*                  example: cutNameTest
*                cutLength:
*                  type: integer
*                  example: 10
*                recordEtc: 
*                  type: string
*                  example: etcTest
*      responses:
*        "200":
*          description: "successful operation"
*  /api/swagger/recordUpdate/perm :
*    post:
*      tags: [Record]
*      summary: Perm 기록 수정 요청
*      consume: multipart/form-data
*      produces: application/json
*      requestBody:
*        content:
*          multipart/form-data:
*            schema:
*              type: object
*              properties:
*                RecordId:
*                  type: integer
*                Image:
*                  type: string
*                  format: base64
*                recordGrade:
*                  type: integer
*                  example: 3
*                recordDate:
*                  type: string
*                  example: 2022-06-23
*                designerName:
*                  type: string
*                  example: 미라클
*                recordCost:
*                  type: integer
*                  example: 30000
*                permName:
*                  type: string
*                  example: permNameTest
*                permTime:
*                  type: integer
*                  example: 3
*                permHurt:
*                  type: integer
*                  example: 2
*                recordEtc:  
*                  type: string 
*                  example: etcTest
*      responses:
*        "200":
*          description: "successful operation"
*  /api/swagger/recordUpdate/dyeing :
*    post:
*      tags: [Record]
*      summary: Dyeing 기록 수정 요청
*      consume: multipart/form-data
*      produces: application/json
*      requestBody:
*        content:
*          multipart/form-data:
*            schema:
*              type: object
*              properties:
*                RecordId:
*                  type: integer
*                Image:
*                  type: string
*                  format: base64
*                recordGrade:
*                  type: integer
*                  example: 3
*                recordDate:
*                  type: string
*                  example: 2022-06-23
*                designerName:
*                  type: string
*                  example: 미라클
*                recordCost:
*                  type: integer
*                  example: 30000
*                dyeingColor:
*                  type: string
*                  example: dyeingColor
*                dyeingDecolorization:
*                  type: integer
*                  example: 3
*                dyeingTime:
*                  type: integer
*                  example: 2
*                dyeingHurt:
*                  type: integer
*                  example: 2
*                recordEtc:  
*                  type: string 
*                  example: etcTest 
*      responses:
*        "200":
*          description: "successful operation"
*/