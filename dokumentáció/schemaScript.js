db.createCollection("tickets", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "tickets",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "createdAt": { bsonType: "date" },
        "modifiedAt": { bsonType: "date" },
        "senderId": { bsonType: "objectId" },
        "siteId": { bsonType: "objectId" },
        "product": { bsonType: "string" },
        "amount": { bsonType: "int" },
        "unit": { bsonType: "string" },
        "price": { bsonType: "decimal" },
        "supplierId": { bsonType: "objectId" },
        "payment": { bsonType: "enum" },
        "description": { bsonType: "string" },
        "status": { bsonType: "enum" },
      },
    },
  },
});

db.createCollection("replies", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "replies",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "ticketId": { bsonType: "objectId" },
        "userId": { bsonType: "objectId" },
        "message": { bsonType: "string" },
        "createdAt": { bsonType: "date" },
        "modifiedAt": { bsonType: "date" },
      },
    },
  },
});

db.createCollection("user", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "user",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "username": { bsonType: "string" },
        "email": { bsonType: "string" },
        "password": { bsonType: "string" },
        "createdAt": { bsonType: "date" },
        "modifiedAt": { bsonType: "date" },
        "role": { bsonType: "enum" },
        "siteId": { bsonType: "objectId" },
      },
    },
  },
});

db.createCollection("suppliers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "suppliers",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "address": { bsonType: "string" },
        "vat": { bsonType: "string" },
      },
    },
  },
});

db.createCollection("sites", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sites",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "postcode": { bsonType: "int" },
        "city": { bsonType: "string" },
        "street": { bsonType: "string" },
        "number": { bsonType: "string" },
        "leaderId": { bsonType: "objectId" },
      },
    },
  },
});