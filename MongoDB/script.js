
db.emp.insertMany([
    {id: 1, name: "Alice", age: 30, department: "HR"},
    {id: 2, name: "Bob", age: 25, department: "Engineering"},
    {id: 3, name: "Charlie", age: 35, department: "Finance"},
    {id: 4, name: "David", age: 28, department: "Marketing"},
    {id: 5, name: "Eve", age: 22, department: "Sales"},
    {id: 6, name: "Frank", age: 40, department: "IT"},
    {id: 7, name: "Grace", age: 29, department: "Operations"},
    {id: 8, name: "Hannah", age: 31, department: "Customer Service"},
    {id: 9, name: "Ian", age: 27, department: "Logistics"},
    {id: 10, name: "Jack", age: 33, department: "Research"},
    {id: 11, name: "Kathy", age: 26, department: "Development"},
    {id: 12, name: "Leo", age: 34, department: "Design"},
    {id: 13, name: "Mia", age: 23, department: "Support"},
    {id: 14, name: "Nina", age: 32, department: "Quality Assurance"},   
    {id: 15, name: "Oscar", age: 38, department: "Administration"},
    {id: 16, name: "Paul", age: 24, department: "Training"},
    {id: 17, name: "Quinn", age: 36, department: "Compliance"},
    {id: 18, name: "Rachel", age: 30, department: "Public Relations"},
    {id: 19, name: "Sam", age: 37, department: "Legal"},
    {id: 20, name: "Tina", age: 21, department: "Business Development"},
    {id: 21, name: "Uma", age: 39, department: "Strategy"},
    {id: 22, name: "Vera", age: 30, department: "Analytics"},
    {id: 23, name: "Will", age: 28, department: "Content"},
    {id: 24, name: "Xander", age: 35, department: "Engineering"},
    {id: 25, name: "Yara", age: 29, department: "Research"},
    {id: 26, name: "Zane", age: 32, department: "Marketing"},
    {id: 27, name: "Amy", age: 26, department: "Sales"},
    {id: 28, name: "Ben", age: 34, department: "IT"},
    {id: 29, name: "Cathy", age: 23, department: "Operations"},
    {id: 30, name: "Derek", age: 31, department: "Customer Service"}
]);

//one to one mapping
// In this example, we will create a one-to-one relationship between employees and their passports.
db.emp.insertOne({_id:1, name:'sam', salary:1000});
db.passport.insertOne({pass_id:1001, passport_num:'AOBcD00123', emp_id:1});

// To establish the one-to-one relationship, we can embed the passport information within the employee document.
db.emp.insertOne({_id:1, name:'sam', salary:1000,
    passport:{
        pass_id:1001, passport_num:'AOBcD00123'
    }
});

// when we have strong one to one relationship, then we can embed the document
// If the relationship is not strong, we can use references instead.


// one to many mapping
// question and answers
// approach 1: Embedding answers within the question document
db.question.insertOne({_id:1, question:'What is MongoDB?', answers:[
    {answer_id:1, answer_text:'MongoDB is a NoSQL database'},
    {answer_id:2, answer_text:'MongoDB stores data in JSON-like documents'}
]});
// In this case, we have a one-to-many relationship where one question can have multiple answers.

// approach 2: Using a separate collection for answers and referencing the question
db.question.insertOne({_id:1, question:'What is MongoDB?'});
db.answer.insertMany([
    {answer_id:1, answer_text:'MongoDB is a NoSQL database', question_id:1},
    {answer_id:2, answer_text:'MongoDB stores data in JSON-like documents', question_id:1}
]);
// In this case, we have a one-to-many relationship where one question can have multiple answers.

//approach 3: 
db.answers.insertMany([
    {answer_id:1, answer_text:'MongoDB is a NoSQL database'},
    {answer_id:2, answer_text:'MongoDB stores data in JSON-like documents'}
]);
db.question.insertOne({_id:1, question:'What is MongoDB?', answers:[1,2]});

//rule:  maximum size of document is 16MB
// depth of document is 100 levels
a:{
    b:{
        c:{
            d:{
                e:{
                    f:{
                        g:{
                            h:{
                                i:{
                                    j:{
                                        k:{}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}