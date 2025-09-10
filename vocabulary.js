const vocabulary = [
    // Food (20)
    { word: "Apple", meaning: "Quả táo", example: "I eat an apple every day.", pronunciation: "/ˈæp.l̩/", category: "food", image: "images/apple.jpg" },
    { word: "Banana", meaning: "Quả chuối", example: "She likes banana smoothies.", pronunciation: "/bəˈnæn.ə/", category: "food", image: "images/banana.jpg" },
    { word: "Orange", meaning: "Quả cam", example: "Oranges are rich in vitamin C.", pronunciation: "/ˈɒr.ɪndʒ/", category: "food", image: "images/orange.jpg" },
    { word: "Bread", meaning: "Bánh mì", example: "He buys bread every morning.", pronunciation: "/bred/", category: "food", image: "images/bread.jpg" },
    { word: "Rice", meaning: "Gạo, cơm", example: "Rice is a staple food in Asia.", pronunciation: "/raɪs/", category: "food", image: "images/rice.jpg" },
    { word: "Mango", meaning: "Quả xoài", example: "Mangoes are sweet and juicy.", pronunciation: "/ˈmæŋ.ɡoʊ/", category: "food", image: "images/mango.jpg" },
    { word: "Pizza", meaning: "Bánh pizza", example: "We ordered a pizza for dinner.", pronunciation: "/ˈpiːt.sə/", category: "food", image: "images/pizza.jpg" },
    { word: "Sushi", meaning: "Sushi", example: "Sushi is a Japanese dish.", pronunciation: "/ˈsuː.ʃi/", category: "food", image: "images/sushi.jpg" },
    { word: "Egg", meaning: "Trứng", example: "She fries an egg for breakfast.", pronunciation: "/ɛɡ/", category: "food", image: "images/egg.jpg" },
    { word: "Milk", meaning: "Sữa", example: "He drinks milk every morning.", pronunciation: "/mɪlk/", category: "food", image: "images/milk.jpg" },
    { word: "Cheese", meaning: "Phô mai", example: "Cheese is great on pizza.", pronunciation: "/tʃiːz/", category: "food", image: "images/cheese.jpg" },
    { word: "Chicken", meaning: "Thịt gà", example: "We grilled chicken for lunch.", pronunciation: "/ˈtʃɪk.ɪn/", category: "food", image: "images/chicken.jpg" },
    { word: "Fish", meaning: "Cá", example: "Fish is healthy to eat.", pronunciation: "/fɪʃ/", category: "food", image: "images/fish_food.jpg" },
    { word: "Carrot", meaning: "Cà rốt", example: "Carrots are good for your eyes.", pronunciation: "/ˈkær.ət/", category: "food", image: "images/carrot.jpg" },
    { word: "Tomato", meaning: "Cà chua", example: "Tomatoes are used in salads.", pronunciation: "/təˈmeɪ.toʊ/", category: "food", image: "images/tomato.jpg" },
    { word: "Lemon", meaning: "Quả chanh", example: "Lemon juice is sour.", pronunciation: "/ˈlem.ən/", category: "food", image: "images/lemon.jpg" },
    { word: "Strawberry", meaning: "Quả dâu tây", example: "She loves strawberries.", pronunciation: "/ˈstrɔː.bər.i/", category: "food", image: "images/strawberry.jpg" },
    { word: "Cake", meaning: "Bánh ngọt", example: "We ate cake at the party.", pronunciation: "/keɪk/", category: "food", image: "images/cake.jpg" },
    { word: "Soup", meaning: "Súp", example: "The soup is hot.", pronunciation: "/suːp/", category: "food", image: "images/soup.jpg" },
    { word: "Noodle", meaning: "Mì", example: "I like noodle soup.", pronunciation: "/ˈnuː.dəl/", category: "food", image: "images/noodle.jpg" },
    // Emotion (10)
    { word: "Happy", meaning: "Vui vẻ", example: "He looks happy today.", pronunciation: "/ˈhæp.i/", category: "emotion", image: "images/happy.jpg" },
    { word: "Sad", meaning: "Buồn", example: "She felt sad after the news.", pronunciation: "/sæd/", category: "emotion", image: "images/sad.jpg" },
    { word: "Angry", meaning: "Tức giận", example: "He was angry about the delay.", pronunciation: "/ˈæŋ.ɡri/", category: "emotion", image: "images/angry.jpg" },
    { word: "Excited", meaning: "Hào hứng", example: "The kids are excited for the trip.", pronunciation: "/ɪkˈsaɪ.tɪd/", category: "emotion", image: "images/excited.jpg" },
    { word: "Calm", meaning: "Bình tĩnh", example: "Stay calm in an emergency.", pronunciation: "/kɑːm/", category: "emotion", image: "images/calm.jpg" },
    { word: "Scared", meaning: "Sợ hãi", example: "She is scared of spiders.", pronunciation: "/skɛərd/", category: "emotion", image: "images/scared.jpg" },
    { word: "Surprised", meaning: "Ngạc nhiên", example: "He was surprised by the gift.", pronunciation: "/sərˈpraɪzd/", category: "emotion", image: "images/surprised.jpg" },
    { word: "Tired", meaning: "Mệt mỏi", example: "I feel tired after work.", pronunciation: "/ˈtaɪərd/", category: "emotion", image: "images/tired.jpg" },
    { word: "Bored", meaning: "Chán", example: "She is bored with the movie.", pronunciation: "/bɔːrd/", category: "emotion", image: "images/bored.jpg" },
    { word: "Proud", meaning: "Tự hào", example: "He is proud of his son.", pronunciation: "/praʊd/", category: "emotion", image: "images/proud.jpg" },
    // Object (10)
    { word: "Book", meaning: "Cuốn sách", example: "She is reading a book.", pronunciation: "/bʊk/", category: "object", image: "images/book.jpg" },
    { word: "Pen", meaning: "Cây bút", example: "I need a pen to write.", pronunciation: "/pen/", category: "object", image: "images/pen.jpg" },
    { word: "Table", meaning: "Cái bàn", example: "The table is made of wood.", pronunciation: "/ˈteɪ.bəl/", category: "object", image: "images/table.jpg" },
    { word: "Chair", meaning: "Cái ghế", example: "He sat on a chair.", pronunciation: "/tʃeər/", category: "object", image: "images/chair.jpg" },
    { word: "Car", meaning: "Xe hơi", example: "She drives a red car.", pronunciation: "/kɑːr/", category: "object", image: "images/car.jpg" },
    { word: "Phone", meaning: "Điện thoại", example: "My phone is new.", pronunciation: "/foʊn/", category: "object", image: "images/phone.jpg" },
    { word: "Laptop", meaning: "Máy tính xách tay", example: "He works on his laptop.", pronunciation: "/ˈlæp.tɒp/", category: "object", image: "images/laptop.jpg" },
    { word: "Clock", meaning: "Đồng hồ", example: "The clock shows the time.", pronunciation: "/klɒk/", category: "object", image: "images/clock.jpg" },
    { word: "Bag", meaning: "Cái cặp", example: "She carries a red bag.", pronunciation: "/bæɡ/", category: "object", image: "images/bag.jpg" },
    { word: "Lamp", meaning: "Đèn bàn", example: "The lamp is on the table.", pronunciation: "/læmp/", category: "object", image: "images/lamp.jpg" },
    // Animal (5)
    { word: "Dog", meaning: "Chó", example: "The dog is barking.", pronunciation: "/dɒɡ/", category: "animal", image: "images/dog.jpg" },
    { word: "Cat", meaning: "Mèo", example: "The cat is sleeping.", pronunciation: "/kæt/", category: "animal", image: "images/cat.jpg" },
    { word: "Bird", meaning: "Chim", example: "The bird is flying.", pronunciation: "/bɜːrd/", category: "animal", image: "images/bird.jpg" },
    { word: "Fish", meaning: "Cá", example: "The fish swims in the tank.", pronunciation: "/fɪʃ/", category: "animal", image: "images/fish_animal.jpg" },
    { word: "Horse", meaning: "Ngựa", example: "The horse runs fast.", pronunciation: "/hɔːrs/", category: "animal", image: "images/horse.jpg" },
    // Action (5)
    { word: "Run", meaning: "Chạy", example: "He runs every morning.", pronunciation: "/rʌn/", category: "action", image: "images/run.jpg" },
    { word: "Walk", meaning: "Đi bộ", example: "She walks to school.", pronunciation: "/wɔːk/", category: "action", image: "images/walk.jpg" },
    { word: "Sing", meaning: "Hát", example: "They sing a song together.", pronunciation: "/sɪŋ/", category: "action", image: "images/sing.jpg" },
    { word: "Dance", meaning: "Nhảy", example: "She loves to dance.", pronunciation: "/dæns/", category: "action", image: "images/dance.jpg" },
    { word: "Write", meaning: "Viết", example: "He writes a letter.", pronunciation: "/raɪt/", category: "action", image: "images/write.jpg" },
    // Colors (8)
    { word: "Red", meaning: "Màu đỏ", example: "The apple is red.", pronunciation: "/rɛd/", category: "colors", image: "images/red.jpg" },
    { word: "Blue", meaning: "Màu xanh dương", example: "The sky is blue.", pronunciation: "/bluː/", category: "colors", image: "images/blue.jpg" },
    { word: "Green", meaning: "Màu xanh lá", example: "The grass is green.", pronunciation: "/ɡriːn/", category: "colors", image: "images/green.jpg" },
    { word: "Yellow", meaning: "Màu vàng", example: "The sun is yellow.", pronunciation: "/ˈjɛloʊ/", category: "colors", image: "images/yellow.jpg" },
    { word: "Black", meaning: "Màu đen", example: "The night is black.", pronunciation: "/blæk/", category: "colors", image: "images/black.jpg" },
    { word: "White", meaning: "Màu trắng", example: "The snow is white.", pronunciation: "/waɪt/", category: "colors", image: "images/white.jpg" },
    { word: "Pink", meaning: "Màu hồng", example: "The flower is pink.", pronunciation: "/pɪŋk/", category: "colors", image: "images/pink.jpg" },
    { word: "Purple", meaning: "Màu tím", example: "The grape is purple.", pronunciation: "/ˈpɜːr.pəl/", category: "colors", image: "images/purple.jpg" },
    // Family (8)
    { word: "Mother", meaning: "Mẹ", example: "My mother is kind.", pronunciation: "/ˈmʌð.ɚ/", category: "family", image: "images/mother.jpg" },
    { word: "Father", meaning: "Bố", example: "My father works hard.", pronunciation: "/ˈfɑː.ðɚ/", category: "family", image: "images/father.jpg" },
    { word: "Brother", meaning: "Anh/em trai", example: "My brother is tall.", pronunciation: "/ˈbrʌð.ɚ/", category: "family", image: "images/brother.jpg" },
    { word: "Sister", meaning: "Chị/em gái", example: "My sister is smart.", pronunciation: "/ˈsɪs.tɚ/", category: "family", image: "images/sister.jpg" },
    { word: "Grandmother", meaning: "Bà ngoại/bà nội", example: "My grandmother tells stories.", pronunciation: "/ˈɡræn.mʌð.ɚ/", category: "family", image: "images/grandmother.jpg" },
    { word: "Grandfather", meaning: "Ông ngoại/ông nội", example: "My grandfather is wise.", pronunciation: "/ˈɡræn.fɑː.ðɚ/", category: "family", image: "images/grandfather.jpg" },
    { word: "Son", meaning: "Con trai", example: "He is my son.", pronunciation: "/sʌn/", category: "family", image: "images/son.jpg" },
    { word: "Daughter", meaning: "Con gái", example: "She is my daughter.", pronunciation: "/ˈdɔː.tɚ/", category: "family", image: "images/daughter.jpg" },
    // Numbers (10)
    { word: "One", meaning: "Một", example: "I have one apple.", pronunciation: "/wʌn/", category: "numbers", image: "images/one.jpg" },
    { word: "Two", meaning: "Hai", example: "I have two books.", pronunciation: "/tuː/", category: "numbers", image: "images/two.jpg" },
    { word: "Three", meaning: "Ba", example: "I have three pens.", pronunciation: "/θriː/", category: "numbers", image: "images/three.jpg" },
    { word: "Four", meaning: "Bốn", example: "I have four chairs.", pronunciation: "/fɔːr/", category: "numbers", image: "images/four.jpg" },
    { word: "Five", meaning: "Năm", example: "I have five cars.", pronunciation: "/faɪv/", category: "numbers", image: "images/five.jpg" },
    { word: "Six", meaning: "Sáu", example: "I have six phones.", pronunciation: "/sɪks/", category: "numbers", image: "images/six.jpg" },
    { word: "Seven", meaning: "Bảy", example: "I have seven laptops.", pronunciation: "/ˈsɛv.ən/", category: "numbers", image: "images/seven.jpg" },
    { word: "Eight", meaning: "Tám", example: "I have eight clocks.", pronunciation: "/eɪt/", category: "numbers", image: "images/eight.jpg" },
    { word: "Nine", meaning: "Chín", example: "I have nine bags.", pronunciation: "/naɪn/", category: "numbers", image: "images/nine.jpg" },
    { word: "Ten", meaning: "Mười", example: "I have ten lamps.", pronunciation: "/tɛn/", category: "numbers", image: "images/ten.jpg" },
    // School (8)
    { word: "School", meaning: "Trường học", example: "I go to school every day.", pronunciation: "/skuːl/", category: "school", image: "images/school.jpg" },
    { word: "Teacher", meaning: "Giáo viên", example: "The teacher is teaching.", pronunciation: "/ˈtiː.tʃɚ/", category: "school", image: "images/teacher.jpg" },
    { word: "Student", meaning: "Học sinh", example: "The student is learning.", pronunciation: "/ˈstuː.dənt/", category: "school", image: "images/student.jpg" },
    { word: "Book", meaning: "Sách", example: "The book is on the desk.", pronunciation: "/bʊk/", category: "school", image: "images/book.jpg" },
    { word: "Pen", meaning: "Bút", example: "I write with a pen.", pronunciation: "/pɛn/", category: "school", image: "images/pen.jpg" },
    { word: "Backpack", meaning: "Cặp sách", example: "I carry my backpack to school.", pronunciation: "/ˈbæk.pæk/", category: "school", image: "images/backpack.jpg" },
    { word: "Classroom", meaning: "Lớp học", example: "The classroom is clean.", pronunciation: "/ˈklæs.ruːm/", category: "school", image: "images/classroom.jpg" },
    { word: "Notebook", meaning: "Sổ tay", example: "I take notes in my notebook.", pronunciation: "/ˈnoʊt.bʊk/", category: "school", image: "images/notebook.jpg" },
    // Weather (8)
    { word: "Sunny", meaning: "Nắng", example: "The weather is sunny.", pronunciation: "/ˈsʌn.i/", category: "weather", image: "images/sunny.jpg" },
    { word: "Rainy", meaning: "Mưa", example: "It is rainy today.", pronunciation: "/ˈreɪ.ni/", category: "weather", image: "images/rainy.jpg" },
    { word: "Cloudy", meaning: "Nhiều mây", example: "The sky is cloudy.", pronunciation: "/ˈklaʊ.di/", category: "weather", image: "images/cloudy.jpg" },
    { word: "Windy", meaning: "Gió", example: "It is windy outside.", pronunciation: "/ˈwɪn.di/", category: "weather", image: "images/windy.jpg" },
    { word: "Snowy", meaning: "Có tuyết", example: "The weather is snowy.", pronunciation: "/ˈsnoʊ.i/", category: "weather", image: "images/snowy.jpg" },
    { word: "Hot", meaning: "Nóng", example: "The weather is hot.", pronunciation: "/hɑːt/", category: "weather", image: "images/hot.jpg" },
    { word: "Cold", meaning: "Lạnh", example: "The weather is cold.", pronunciation: "/koʊld/", category: "weather", image: "images/cold.jpg" },
    { word: "Stormy", meaning: "Bão", example: "The weather is stormy.", pronunciation: "/ˈstɔːr.mi/", category: "weather", image: "images/stormy.jpg" }
];

const grammarLessons = [
    {
        id: 1,
        title: "Thì Hiện tại đơn (Present Simple)",
        explanation: "Thì hiện tại đơn diễn tả thói quen, sự thật hiển nhiên, hoặc trạng thái thường xuyên. Cấu trúc: S + V(s/es) (khẳng định); S + do/does + not + V (phủ định); Do/Does + S + V? (câu hỏi).",
        examples: [
            "She walks to school every day.",
            "They do not like coffee.",
            "Does he play football?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại đơn:",
                answers: [
                    "She walk to school every day.",
                    "She walks to school every day.",
                    "She is walking to school every day.",
                    "She walked to school every day."
                ],
                correct: "She walks to school every day."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'go' vào câu: He ___ to the park every weekend.",
                correct: "goes"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại đơn:",
                answers: [
                    "They sings a song every day.",
                    "They sing a song every day.",
                    "They are singing a song every day.",
                    "They sung a song every day."
                ],
                correct: "They sing a song every day."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'eat' vào câu: She ___ an apple every morning.",
                correct: "eats"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại đơn:",
                answers: [
                    "He run fast every morning.",
                    "He runs fast every morning.",
                    "He is running fast every morning.",
                    "He ran fast every morning."
                ],
                correct: "He runs fast every morning."
            }
        ]
    },
    {
        id: 2,
        title: "Thì Quá khứ đơn (Past Simple)",
        explanation: "Thì quá khứ đơn diễn tả hành động đã hoàn thành trong quá khứ. Cấu trúc: S + V-ed/V2 (khẳng định); S + did + not + V (phủ định); Did + S + V? (câu hỏi).",
        examples: [
            "He played football yesterday.",
            "They did not visit the museum.",
            "Did she watch the movie?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ đơn:",
                answers: [
                    "She visits her grandmother last weekend.",
                    "She visited her grandmother last weekend.",
                    "She is visiting her grandmother last weekend.",
                    "She visit her grandmother last weekend."
                ],
                correct: "She visited her grandmother last weekend."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'eat' vào câu: They ___ pizza last night.",
                correct: "ate"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ đơn:",
                answers: [
                    "He walks to school yesterday.",
                    "He walked to school yesterday.",
                    "He is walking to school yesterday.",
                    "He walk to school yesterday."
                ],
                correct: "He walked to school yesterday."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'write' vào câu: I ___ a letter yesterday.",
                correct: "wrote"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ đơn:",
                answers: [
                    "They dance at the party last night.",
                    "They danced at the party last night.",
                    "They are dancing at the party last night.",
                    "They dancing at the party last night."
                ],
                correct: "They danced at the party last night."
            }
        ]
    },
    {
        id: 3,
        title: "Câu điều kiện loại 1 (First Conditional)",
        explanation: "Câu điều kiện loại 1 diễn tả tình huống có thể xảy ra trong tương lai. Cấu trúc: If + S + V(s/es), S + will + V.",
        examples: [
            "If it rains, we will stay at home.",
            "If she studies hard, she will pass the exam.",
            "If they leave now, they will arrive on time."
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 1:",
                answers: [
                    "If I see her, I tell her.",
                    "If I see her, I will tell her.",
                    "If I saw her, I will tell her.",
                    "If I see her, I would tell her."
                ],
                correct: "If I see her, I will tell her."
            },
            {
                type: "fill",
                question: "Điền từ đúng vào chỗ trống: If you ___ (study), you will pass the test.",
                correct: "study"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 1:",
                answers: [
                    "If it is sunny, we go to the park.",
                    "If it is sunny, we will go to the park.",
                    "If it was sunny, we will go to the park.",
                    "If it is sunny, we would go to the park."
                ],
                correct: "If it is sunny, we will go to the park."
            },
            {
                type: "fill",
                question: "Điền từ đúng vào chỗ trống: If she ___ (run), she will catch the bus.",
                correct: "runs"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 1:",
                answers: [
                    "If he dances, he will win.",
                    "If he dance, he will win.",
                    "If he danced, he will win.",
                    "If he dancing, he will win."
                ],
                correct: "If he dances, he will win."
            }
        ]
    },
    {
        id: 4,
        title: "Thì Hiện tại tiếp diễn (Present Continuous)",
        explanation: "Thì hiện tại tiếp diễn diễn tả hành động đang xảy ra tại thời điểm nói hoặc hành động tạm thời. Cấu trúc: S + am/is/are + V-ing (khẳng định); S + am/is/are + not + V-ing (phủ định); Am/Is/Are + S + V-ing? (câu hỏi).",
        examples: [
            "She is reading a book now.",
            "They are not playing outside.",
            "Are you studying for the exam?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại tiếp diễn:",
                answers: [
                    "He reads a book now.",
                    "He is reading a book now.",
                    "He read a book now.",
                    "He is read a book now."
                ],
                correct: "He is reading a book now."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'run' vào câu: They ___ in the park right now.",
                correct: "are running"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại tiếp diễn:",
                answers: [
                    "She sings a song now.",
                    "She is singing a song now.",
                    "She sung a song now.",
                    "She sing a song now."
                ],
                correct: "She is singing a song now."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'dance' vào câu: He ___ at the party right now.",
                correct: "is dancing"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại tiếp diễn:",
                answers: [
                    "They write a letter now.",
                    "They are writing a letter now.",
                    "They wrote a letter now.",
                    "They writing a letter now."
                ],
                correct: "They are writing a letter now."
            }
        ]
    },
    {
        id: 5,
        title: "Thì Hiện tại hoàn thành (Present Perfect)",
        explanation: "Thì hiện tại hoàn thành diễn tả hành động đã xảy ra và có kết quả ở hiện tại hoặc kinh nghiệm. Cấu trúc: S + have/has + V3/ed (khẳng định); S + have/has + not + V3/ed (phủ định); Have/Has + S + V3/ed? (câu hỏi).",
        examples: [
            "I have just finished my homework.",
            "She has not been to Paris.",
            "Have they seen that movie?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại hoàn thành:",
                answers: [
                    "She has visited London last year.",
                    "She visited London last year.",
                    "She has visit London.",
                    "She has visited London."
                ],
                correct: "She has visited London."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'see' vào câu: I ___ that movie three times.",
                correct: "have seen"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại hoàn thành:",
                answers: [
                    "He eats two apples.",
                    "He has eaten two apples.",
                    "He ate two apples.",
                    "He has eat two apples."
                ],
                correct: "He has eaten two apples."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'write' vào câu: They ___ three letters this week.",
                correct: "have written"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì hiện tại hoàn thành:",
                answers: [
                    "She dances at the party.",
                    "She has danced at the party.",
                    "She danced at the party.",
                    "She dance at the party."
                ],
                correct: "She has danced at the party."
            }
        ]
    },
    {
        id: 6,
        title: "Câu bị động (Passive Voice)",
        explanation: "Câu bị động được dùng khi muốn nhấn mạnh đối tượng chịu tác động của hành động. Cấu trúc: S + be + V3/ed (khẳng định); S + be + not + V3/ed (phủ định); Be + S + V3/ed? (câu hỏi).",
        examples: [
            "The book was written by J.K. Rowling.",
            "The room is not cleaned every day.",
            "Was the letter sent yesterday?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu bị động đúng:",
                answers: [
                    "The cake was eaten by the children.",
                    "The cake eaten by the children.",
                    "The children was eaten the cake.",
                    "The cake is eat by the children."
                ],
                correct: "The cake was eaten by the children."
            },
            {
                type: "fill",
                question: "Chuyển câu sau sang bị động: Someone cleans the room every day. -> The room ___ every day.",
                correct: "is cleaned"
            },
            {
                type: "multiple",
                question: "Chọn câu bị động đúng:",
                answers: [
                    "The book is read by the student.",
                    "The book read by the student.",
                    "The student is read the book.",
                    "The book is reading by the student."
                ],
                correct: "The book is read by the student."
            },
            {
                type: "fill",
                question: "Chuyển câu sau sang bị động: Someone painted the house last week. -> The house ___ last week.",
                correct: "was painted"
            },
            {
                type: "multiple",
                question: "Chọn câu bị động đúng:",
                answers: [
                    "The letter writes by her.",
                    "The letter was written by her.",
                    "The letter written by her.",
                    "Her was written the letter."
                ],
                correct: "The letter was written by her."
            }
        ]
    },
    {
        id: 7,
        title: "Câu so sánh (Comparatives and Superlatives)",
        explanation: "Câu so sánh dùng để so sánh giữa các đối tượng. So sánh hơn: S + be/V + -er/more + tính từ + than + O. So sánh nhất: S + be/V + the + -est/most + tính từ.",
        examples: [
            "She is taller than her brother.",
            "This is the most beautiful place I have ever seen.",
            "He runs faster than his friend."
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu so sánh đúng:",
                answers: [
                    "This book is more interesting than that one.",
                    "This book is interestinger than that one.",
                    "This book is the interesting than that one.",
                    "This book is most interesting than that one."
                ],
                correct: "This book is more interesting than that one."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của tính từ 'big' vào câu: My house is ___ than yours.",
                correct: "bigger"
            },
            {
                type: "multiple",
                question: "Chọn câu so sánh đúng:",
                answers: [
                    "The cat is faster than the dog.",
                    "The cat is fast than the dog.",
                    "The cat is more fast than the dog.",
                    "The cat is fastest than the dog."
                ],
                correct: "The cat is faster than the dog."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của tính từ 'happy' vào câu: She is the ___ girl in the class.",
                correct: "happiest"
            },
            {
                type: "multiple",
                question: "Chọn câu so sánh đúng:",
                answers: [
                    "This car is the most expensive.",
                    "This car is more expensive than.",
                    "This car is expensiver.",
                    "This car is most expensive than."
                ],
                correct: "This car is the most expensive."
            }
        ]
    },
    {
        id: 8,
        title: "Câu hỏi đuôi (Question Tags)",
        explanation: "Câu hỏi đuôi được dùng để xác nhận thông tin, có cấu trúc: Câu khẳng định + câu hỏi phủ định, hoặc Câu phủ định + câu hỏi khẳng định.",
        examples: [
            "You are coming, aren't you?",
            "She doesn't like coffee, does she?",
            "They have finished, haven't they?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu hỏi đuôi đúng: He is a student, ___?",
                answers: [
                    "is he?",
                    "isn't he?",
                    "does he?",
                    "doesn't he?"
                ],
                correct: "isn't he?"
            },
            {
                type: "fill",
                question: "Điền câu hỏi đuôi đúng: She can swim, ___?",
                correct: "can't she"
            },
            {
                type: "multiple",
                question: "Chọn câu hỏi đuôi đúng: They like to sing, ___?",
                answers: [
                    "do they?",
                    "don't they?",
                    "are they?",
                    "aren't they?"
                ],
                correct: "don't they?"
            },
            {
                type: "fill",
                question: "Điền câu hỏi đuôi đúng: The dog is barking, ___?",
                correct: "isn't it"
            },
            {
                type: "multiple",
                question: "Chọn câu hỏi đuôi đúng: She has a cat, ___?",
                answers: [
                    "has she?",
                    "hasn't she?",
                    "does she?",
                    "doesn't she?"
                ],
                correct: "hasn't she?"
            }
        ]
    },
    {
        id: 9,
        title: "Thì Quá khứ tiếp diễn (Past Continuous)",
        explanation: "Thì quá khứ tiếp diễn diễn tả hành động đang xảy ra tại một thời điểm trong quá khứ. Cấu trúc: S + was/were + V-ing (khẳng định); S + was/were + not + V-ing (phủ định); Was/Were + S + V-ing? (câu hỏi).",
        examples: [
            "I was reading a book at 8 PM yesterday.",
            "They were not playing football when it started raining.",
            "Was she cooking dinner when you arrived?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ tiếp diễn:",
                answers: [
                    "He eats dinner at 7 PM.",
                    "He was eating dinner at 7 PM.",
                    "He ate dinner at 7 PM.",
                    "He is eating dinner at 7 PM."
                ],
                correct: "He was eating dinner at 7 PM."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'watch' vào câu: We ___ TV when the power went out.",
                correct: "were watching"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ tiếp diễn:",
                answers: [
                    "She sings at 9 PM last night.",
                    "She was singing at 9 PM last night.",
                    "She sung at 9 PM last night.",
                    "She sing at 9 PM last night."
                ],
                correct: "She was singing at 9 PM last night."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'dance' vào câu: They ___ when it started raining.",
                correct: "were dancing"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ tiếp diễn:",
                answers: [
                    "I write a letter at 5 PM.",
                    "I was writing a letter at 5 PM.",
                    "I wrote a letter at 5 PM.",
                    "I am writing a letter at 5 PM."
                ],
                correct: "I was writing a letter at 5 PM."
            }
        ]
    },
    {
        id: 10,
        title: "Thì Tương lai đơn (Future Simple)",
        explanation: "Thì tương lai đơn diễn tả hành động sẽ xảy ra trong tương lai. Cấu trúc: S + will + V (khẳng định); S + will + not + V (phủ định); Will + S + V? (câu hỏi).",
        examples: [
            "I will call you tomorrow.",
            "They will not attend the meeting.",
            "Will she visit her grandparents next week?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì tương lai đơn:",
                answers: [
                    "He goes to school tomorrow.",
                    "He will go to school tomorrow.",
                    "He went to school tomorrow.",
                    "He is going to school tomorrow."
                ],
                correct: "He will go to school tomorrow."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'buy' vào câu: I ___ a new car next year.",
                correct: "will buy"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì tương lai đơn:",
                answers: [
                    "She sings tomorrow.",
                    "She will sing tomorrow.",
                    "She sung tomorrow.",
                    "She is singing tomorrow."
                ],
                correct: "She will sing tomorrow."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'eat' vào câu: They ___ sushi next weekend.",
                correct: "will eat"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì tương lai đơn:",
                answers: [
                    "He dances next week.",
                    "He will dance next week.",
                    "He danced next week.",
                    "He dancing next week."
                ],
                correct: "He will dance next week."
            }
        ]
    },
    {
        id: 11,
        title: "Câu điều kiện loại 2 (Second Conditional)",
        explanation: "Câu điều kiện loại 2 diễn tả tình huống không có thật ở hiện tại hoặc tương lai. Cấu trúc: If + S + V2/ed, S + would + V.",
        examples: [
            "If I won the lottery, I would travel the world.",
            "If she were richer, she would buy a house.",
            "Would you help me if I asked?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 2:",
                answers: [
                    "If I see her, I would tell her.",
                    "If I saw her, I will tell her.",
                    "If I saw her, I would tell her.",
                    "If I see her, I will tell her."
                ],
                correct: "If I saw her, I would tell her."
            },
            {
                type: "fill",
                question: "Điền từ đúng vào chỗ trống: If it ___ (rain), we would stay at home.",
                correct: "rained"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 2:",
                answers: [
                    "If he is rich, he would buy a car.",
                    "If he was rich, he would buy a car.",
                    "If he were rich, he will buy a car.",
                    "If he rich, he would buy a car."
                ],
                correct: "If he were rich, he would buy a car."
            },
            {
                type: "fill",
                question: "Điền từ đúng vào chỗ trống: If I ___ (have) a dog, I would be happy.",
                correct: "had"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 2:",
                answers: [
                    "If she sings, she would win.",
                    "If she sang, she would win.",
                    "If she sing, she would win.",
                    "If she sung, she would win."
                ],
                correct: "If she sang, she would win."
            }
        ]
    },
    {
        id: 12,
        title: "Câu điều kiện loại 3 (Third Conditional)",
        explanation: "Câu điều kiện loại 3 diễn tả tình huống không có thật trong quá khứ. Cấu trúc: If + S + had + V3/ed, S + would have + V3/ed.",
        examples: [
            "If I had studied harder, I would have passed the exam.",
            "If they had left earlier, they would have caught the train.",
            "Would you have gone if I had invited you?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 3:",
                answers: [
                    "If I knew, I would have told you.",
                    "If I had known, I would have told you.",
                    "If I know, I would have told you.",
                    "If I had known, I would tell you."
                ],
                correct: "If I had known, I would have told you."
            },
            {
                type: "fill",
                question: "Điền từ đúng vào chỗ trống: If she ___ (call), I would have answered.",
                correct: "had called"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 3:",
                answers: [
                    "If he studied, he would have passed.",
                    "If he had studied, he would have passed.",
                    "If he study, he would have passed.",
                    "If he studies, he would have passed."
                ],
                correct: "If he had studied, he would have passed."
            },
            {
                type: "fill",
                question: "Điền từ đúng vào chỗ trống: If we ___ (run), we would have caught the bus.",
                correct: "had run"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở câu điều kiện loại 3:",
                answers: [
                    "If they saw the movie, they would have liked it.",
                    "If they had seen the movie, they would have liked it.",
                    "If they see the movie, they would have liked it.",
                    "If they seen the movie, they would have liked it."
                ],
                correct: "If they had seen the movie, they would have liked it."
            }
        ]
    },
    {
        id: 13,
        title: "Thì Quá khứ hoàn thành (Past Perfect)",
        explanation: "Thì quá khứ hoàn thành diễn tả hành động xảy ra trước một hành động khác trong quá khứ. Cấu trúc: S + had + V3/ed (khẳng định); S + had + not + V3/ed (phủ định); Had + S + V3/ed? (câu hỏi).",
        examples: [
            "I had finished my homework before I went out.",
            "She had not eaten breakfast when she left.",
            "Had they arrived before the meeting started?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ hoàn thành:",
                answers: [
                    "He eats before he left.",
                    "He had eaten before he left.",
                    "He ate before he left.",
                    "He has eaten before he left."
                ],
                correct: "He had eaten before he left."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'see' vào câu: I ___ the movie before I read the book.",
                correct: "had seen"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ hoàn thành:",
                answers: [
                    "She writes a letter before she left.",
                    "She had written a letter before she left.",
                    "She wrote a letter before she left.",
                    "She has written a letter before she left."
                ],
                correct: "She had written a letter before she left."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'sing' vào câu: They ___ a song before the party started.",
                correct: "had sung"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì quá khứ hoàn thành:",
                answers: [
                    "He dances before the show started.",
                    "He had danced before the show started.",
                    "He danced before the show started.",
                    "He dance before the show started."
                ],
                correct: "He had danced before the show started."
            }
        ]
    },
    {
        id: 14,
        title: "Thì Tương lai tiếp diễn (Future Continuous)",
        explanation: "Thì tương lai tiếp diễn diễn tả hành động đang xảy ra tại một thời điểm trong tương lai. Cấu trúc: S + will + be + V-ing (khẳng định); S + will + not + be + V-ing (phủ định); Will + S + be + V-ing? (câu hỏi).",
        examples: [
            "I will be sleeping at midnight.",
            "They will not be working tomorrow.",
            "Will she be studying at 8 PM?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì tương lai tiếp diễn:",
                answers: [
                    "He will work at 5 PM.",
                    "He will be working at 5 PM.",
                    "He works at 5 PM.",
                    "He worked at 5 PM."
                ],
                correct: "He will be working at 5 PM."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'travel' vào câu: We ___ to Hanoi at this time tomorrow.",
                correct: "will be traveling"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì tương lai tiếp diễn:",
                answers: [
                    "She sings at 8 PM tomorrow.",
                    "She will be singing at 8 PM tomorrow.",
                    "She sung at 8 PM tomorrow.",
                    "She will sing at 8 PM tomorrow."
                ],
                correct: "She will be singing at 8 PM tomorrow."
            },
            {
                type: "fill",
                question: "Điền dạng đúng của động từ 'dance' vào câu: They ___ at the party tomorrow night.",
                correct: "will be dancing"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng ở thì tương lai tiếp diễn:",
                answers: [
                    "I write a letter at 6 PM tomorrow.",
                    "I will be writing a letter at 6 PM tomorrow.",
                    "I wrote a letter at 6 PM tomorrow.",
                    "I will write a letter at 6 PM tomorrow."
                ],
                correct: "I will be writing a letter at 6 PM tomorrow."
            }
        ]
    },
    {
        id: 15,
        title: "Tính từ (Adjectives)",
        explanation: "Tính từ dùng để mô tả danh từ, đứng trước danh từ hoặc sau động từ liên kết. Cấu trúc: The big house (trước danh từ); The house is big (sau 'is').",
        examples: [
            "The red car is fast.",
            "She is happy.",
            "The book is interesting."
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng tính từ:",
                answers: [
                    "The car red is fast.",
                    "The red car is fast.",
                    "The car is red fast.",
                    "The fast is red car."
                ],
                correct: "The red car is fast."
            },
            {
                type: "fill",
                question: "Điền tính từ vào chỗ trống: The ___ (beautiful) flower is in the garden.",
                correct: "beautiful"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng tính từ:",
                answers: [
                    "The cat is black.",
                    "The black is cat.",
                    "The cat black is.",
                    "The is black cat."
                ],
                correct: "The cat is black."
            },
            {
                type: "fill",
                question: "Điền tính từ vào chỗ trống: The ___ (happy) dog is running.",
                correct: "happy"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng tính từ:",
                answers: [
                    "The book is yellow book.",
                    "The yellow book is interesting.",
                    "The book yellow is interesting.",
                    "The interesting is yellow book."
                ],
                correct: "The yellow book is interesting."
            }
        ]
    },
    {
        id: 16,
        title: "Trạng từ (Adverbs)",
        explanation: "Trạng từ dùng để mô tả động từ, tính từ hoặc trạng từ khác. Thường kết thúc bằng -ly. Cấu trúc: He runs quickly; She is very happy.",
        examples: [
            "He speaks loudly.",
            "She drives carefully.",
            "The test was extremely difficult."
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng trạng từ:",
                answers: [
                    "He runs quick.",
                    "He runs quickly.",
                    "He quick runs.",
                    "He quickly run."
                ],
                correct: "He runs quickly."
            },
            {
                type: "fill",
                question: "Điền trạng từ vào chỗ trống: She sings ___ (beautiful).",
                correct: "beautifully"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng trạng từ:",
                answers: [
                    "She dances careful.",
                    "She dances carefully.",
                    "She careful dances.",
                    "She carefully dance."
                ],
                correct: "She dances carefully."
            },
            {
                type: "fill",
                question: "Điền trạng từ vào chỗ trống: He writes ___ (neat).",
                correct: "neatly"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng trạng từ:",
                answers: [
                    "They sing loud.",
                    "They sing loudly.",
                    "They loud sing.",
                    "They loudly sings."
                ],
                correct: "They sing loudly."
            }
        ]
    },
    {
        id: 17,
        title: "Mạo từ (Articles: a/an/the)",
        explanation: "Mạo từ 'a/an' dùng cho danh từ không xác định, 'the' dùng cho danh từ xác định. 'A' trước âm phụ âm, 'an' trước âm nguyên âm.",
        examples: [
            "I have a book.",
            "An apple a day keeps the doctor away.",
            "The sun is shining."
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng mạo từ:",
                answers: [
                    "I have apple.",
                    "I have a apple.",
                    "I have an apple.",
                    "I have the apple."
                ],
                correct: "I have an apple."
            },
            {
                type: "fill",
                question: "Điền mạo từ vào chỗ trống: ___ (cat) is on ___ (table).",
                correct: "The cat is on the table"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng mạo từ:",
                answers: [
                    "I see a dog.",
                    "I see dog.",
                    "I see an dog.",
                    "I see the dog."
                ],
                correct: "I see a dog."
            },
            {
                type: "fill",
                question: "Điền mạo từ vào chỗ trống: ___ (book) is on ___ (chair).",
                correct: "The book is on the chair"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng mạo từ:",
                answers: [
                    "I eat a orange.",
                    "I eat an orange.",
                    "I eat orange.",
                    "I eat the orange."
                ],
                correct: "I eat an orange."
            }
        ]
    },
    {
        id: 18,
        title: "Giới từ (Prepositions)",
        explanation: "Giới từ dùng để chỉ vị trí, thời gian, hướng. Ví dụ: in, on, at, to, from.",
        examples: [
            "The book is on the table.",
            "I go to school at 7 AM.",
            "She is from Vietnam."
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng giới từ:",
                answers: [
                    "The book is in the table.",
                    "The book is on the table.",
                    "The book is at the table.",
                    "The book is to the table."
                ],
                correct: "The book is on the table."
            },
            {
                type: "fill",
                question: "Điền giới từ vào chỗ trống: I live ___ Hanoi.",
                correct: "in"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng giới từ:",
                answers: [
                    "I go to school at 7 AM.",
                    "I go to school in 7 AM.",
                    "I go to school on 7 AM.",
                    "I go to school to 7 AM."
                ],
                correct: "I go to school at 7 AM."
            },
            {
                type: "fill",
                question: "Điền giới từ vào chỗ trống: The cat is ___ the chair.",
                correct: "on"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng giới từ:",
                answers: [
                    "She is from Japan.",
                    "She is to Japan.",
                    "She is in Japan.",
                    "She is at Japan."
                ],
                correct: "She is from Japan."
            }
        ]
    },
    {
        id: 19,
        title: "Liên từ (Conjunctions)",
        explanation: "Liên từ dùng để nối các từ, cụm từ hoặc mệnh đề. Ví dụ: and, but, or, because.",
        examples: [
            "I like tea and coffee.",
            "He is tired but happy.",
            "She left because she was late."
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng liên từ:",
                answers: [
                    "I like tea or coffee.",
                    "I like tea and coffee.",
                    "I like tea but coffee.",
                    "I like tea because coffee."
                ],
                correct: "I like tea and coffee."
            },
            {
                type: "fill",
                question: "Điền liên từ vào chỗ trống: She is happy ___ she won the prize.",
                correct: "because"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng liên từ:",
                answers: [
                    "He runs but he sings.",
                    "He runs or he sings.",
                    "He runs and he sings.",
                    "He runs because he sings."
                ],
                correct: "He runs and he sings."
            },
            {
                type: "fill",
                question: "Điền liên từ vào chỗ trống: I can’t go out ___ it’s rainy.",
                correct: "because"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng liên từ:",
                answers: [
                    "She is tired but happy.",
                    "She is tired and happy.",
                    "She is tired or happy.",
                    "She is tired because happy."
                ],
                correct: "She is tired but happy."
            }
        ]
    },
    {
        id: 20,
        title: "Thán từ (Interjections)",
        explanation: "Thán từ dùng để biểu lộ cảm xúc đột ngột. Ví dụ: Oh!, Wow!, Oops!.",
        examples: [
            "Wow! That's amazing.",
            "Oh no! I forgot my keys.",
            "Oops! I made a mistake."
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng thán từ:",
                answers: [
                    "Wow! That's boring.",
                    "Wow! That's amazing.",
                    "Wow! That's normal.",
                    "Wow! That's usual."
                ],
                correct: "Wow! That's amazing."
            },
            {
                type: "fill",
                question: "Điền thán từ vào chỗ trống: ___! I dropped my phone.",
                correct: "Oops"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng thán từ:",
                answers: [
                    "Oh! I see a cat.",
                    "Oh! I see cat.",
                    "Oh! I see an cat.",
                    "Oh! I see the cat."
                ],
                correct: "Oh! I see a cat."
            },
            {
                type: "fill",
                question: "Điền thán từ vào chỗ trống: ___! The cake is delicious.",
                correct: "Wow"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng thán từ:",
                answers: [
                    "Yay! I lost the game.",
                    "Yay! I won the game.",
                    "Yay! I play the game.",
                    "Yay! I see the game."
                ],
                correct: "Yay! I won the game."
            }
        ]
    },
    {
        id: 21,
        title: "Dấu câu (Punctuation)",
        explanation: "Dấu câu dùng để làm rõ nghĩa câu. Ví dụ: Period (.), Comma (,), Question mark (?), Exclamation mark (!).",
        examples: [
            "This is a sentence.",
            "I like apples, oranges, and bananas.",
            "What is your name?"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng dấu câu:",
                answers: [
                    "This is a sentence",
                    "This is a sentence.",
                    "This is a sentence?",
                    "This is a sentence!"
                ],
                correct: "This is a sentence."
            },
            {
                type: "fill",
                question: "Điền dấu câu vào chỗ trống: Where are you going___",
                correct: "?"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng dấu câu:",
                answers: [
                    "I like apples oranges and bananas.",
                    "I like apples, oranges, and bananas.",
                    "I like apples; oranges; and bananas.",
                    "I like apples oranges, and bananas."
                ],
                correct: "I like apples, oranges, and bananas."
            },
            {
                type: "fill",
                question: "Điền dấu câu vào chỗ trống: Wow The dog is running fast___",
                correct: "!"
            },
            {
                type: "multiple",
                question: "Chọn câu đúng sử dụng dấu câu:",
                answers: [
                    "What is your name.",
                    "What is your name?",
                    "What is your name!",
                    "What is your name"
                ],
                correct: "What is your name?"
            }
        ]
    },
    {
        id: 22,
        title: "Loại câu (Sentence Types: Simple, Compound, Complex)",
        explanation: "Câu đơn (Simple): Một mệnh đề độc lập. Câu ghép (Compound): Hai mệnh đề độc lập nối bằng liên từ. Câu phức (Complex): Một mệnh đề độc lập và một mệnh đề phụ thuộc.",
        examples: [
            "I run. (Simple)",
            "I run and I sing. (Compound)",
            "I run when it is sunny. (Complex)"
        ],
        exercises: [
            {
                type: "multiple",
                question: "Xác định loại câu: I eat and I sleep.",
                answers: [
                    "Simple",
                    "Compound",
                    "Complex",
                    "Compound-Complex"
                ],
                correct: "Compound"
            },
            {
                type: "fill",
                question: "Điền liên từ để tạo câu phức: The cat sleeps ___ the dog barks.",
                correct: "while"
            },
            {
                type: "multiple",
                question: "Xác định loại câu: The dog runs.",
                answers: [
                    "Simple",
                    "Compound",
                    "Complex",
                    "Compound-Complex"
                ],
                correct: "Simple"
            },
            {
                type: "fill",
                question: "Điền liên từ để tạo câu ghép: I like to sing ___ I like to dance.",
                correct: "and"
            },
            {
                type: "multiple",
                question: "Xác định loại câu: I write when it is rainy.",
                answers: [
                    "Simple",
                    "Compound",
                    "Complex",
                    "Compound-Complex"
                ],
                correct: "Complex"
            }
        ]
    }
];

const defaultImage = "images/default.jpg";