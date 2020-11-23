const transactions = [
  {
    id: "74ffb445-6417-44a9-bff6-128b235613fd",
    memo:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    amount: 460.36,
    category: "",
    date: "2020-08-03",
  },
  {
    id: "4aa074c8-0035-4003-a067-d730e660b4c3",
    memo:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    amount: 833.42,
    category: "c-8",
    date: "2020-11-02",
  },
  {
    id: "92a4d7f2-bb0e-43dc-bff4-024b0a3d0be7",
    memo:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    amount: 47.9,
    category: "c-2",
    date: "2020-02-20",
  },
  {
    id: "21983137-242d-449e-84cd-b10bfc5585fa",
    memo: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    amount: 1413.23,
    category: "c-3",
    date: "2020-03-19",
  },
  {
    id: "fe1c89ea-6e84-4658-863b-659620e1bb81",
    memo:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    amount: 991.01,
    category: "",
    date: "2020-02-21",
  },
  {
    id: "7e38310c-a9d9-4ec1-915f-b8169dab1b38",
    memo:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    amount: 1642.4,
    category: "c-5",
    date: "2020-11-17",
  },
  {
    id: "08efd7bf-c11c-470d-8a80-54694f847d06",
    memo:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    amount: 1870.88,
    category: "c-2",
    date: "2020-06-26",
  },
  {
    id: "b7a6e415-1a2a-42a4-b059-0fe74205146d",
    memo:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    amount: 60.16,
    category: "c-3",
    date: "2020-04-24",
  },
  {
    id: "8c1248c1-b961-4c2c-8f4f-e10aae3ad186",
    memo:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    amount: 868.82,
    category: "c-7",
    date: "2020-03-10",
  },
  {
    id: "2bd9b6b4-0d9d-44d7-9509-68f7ee92f27f",
    memo:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    amount: 452.17,
    category: "c-1",
    date: "2019-12-01",
  },
  {
    id: "26450fb1-2fe0-445a-92ef-badc8ec230ec",
    memo:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    amount: 689.58,
    category: "c-6",
    date: "2020-11-20",
  },
  {
    id: "8d604e2b-36ce-4587-a8b1-03ae98463791",
    memo:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    amount: 108.76,
    category: "c-1",
    date: "2020-10-06",
  },
  {
    id: "5b2f01af-316e-4df2-be8c-c758b811242f",
    memo:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    amount: 1023.86,
    category: "c-8",
    date: "2020-09-13",
  },
  {
    id: "c1e4d7c0-673c-4a8c-945b-3fcc53d08ea1",
    memo:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    amount: 460.02,
    category: "c-1",
    date: "2020-06-15",
  },
  {
    id: "022c4d90-7b07-4ef8-a83f-481afa88b7c1",
    memo:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    amount: 1575.5,
    category: "c-3",
    date: "2020-07-28",
  },
  {
    id: "7202f756-df6b-40cd-9099-89d24f42c7b5",
    memo:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    amount: 1338.82,
    category: "c-7",
    date: "2020-09-28",
  },
  {
    id: "c943f67b-b25d-4908-9a6c-26b8f71aa6d7",
    memo:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    amount: 1820.73,
    category: "c-3",
    date: "2020-03-22",
  },
  {
    id: "a61a3235-35ea-4634-b7f9-89d980736f84",
    memo:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    amount: 993.84,
    category: "c-5",
    date: "2020-08-07",
  },
  {
    id: "e32ee7a7-172d-4424-8bbf-db0d8fc6c08e",
    memo:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    amount: 1029.55,
    category: "",
    date: "2020-10-07",
  },
  {
    id: "b086317a-4d99-4aa9-9ed2-40518c293471",
    memo: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    amount: 311.19,
    category: "",
    date: "2020-03-25",
  },
  {
    id: "eff65a81-139d-4d3e-b0d0-ed9cf3cdc5e0",
    memo:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    amount: 1476.57,
    category: "c-2",
    date: "2020-11-15",
  },
  {
    id: "55804f15-18d6-4889-a679-8cb0ae49c70d",
    memo:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    amount: 1573.16,
    category: "c-6",
    date: "2020-05-14",
  },
  {
    id: "990f54f4-b722-432e-b6b1-b5ae944e11d0",
    memo:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    amount: 970.11,
    category: "c-4",
    date: "2020-01-31",
  },
  {
    id: "a34b3ee7-42f0-4978-a4eb-a126e2c84082",
    memo:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    amount: 1257.32,
    category: "c-4",
    date: "2020-05-07",
  },
  {
    id: "2f25b16b-fd13-4591-8bee-23d1d5fad424",
    memo:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    amount: 471.26,
    category: "c-4",
    date: "2020-09-26",
  },
  {
    id: "54fb4ef1-b7fb-4aa3-baf9-3778b1683f70",
    memo:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    amount: 559.77,
    category: "c-6",
    date: "2020-01-31",
  },
  {
    id: "ea85763f-f8a3-4e8e-b9a6-37e282104408",
    memo:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    amount: 1051.25,
    category: "c-2",
    date: "2020-06-16",
  },
  {
    id: "e2677008-5277-408f-be64-151003f168a7",
    memo:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    amount: 1540.87,
    category: "c-1",
    date: "2020-03-09",
  },
  {
    id: "825a00cf-5199-4ba3-8e83-1670029228ae",
    memo:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    amount: 899.94,
    category: "c-6",
    date: "2020-05-07",
  },
  {
    id: "747e5388-8903-45f7-bfcf-7d3057e60450",
    memo: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    amount: 553.88,
    category: "c-7",
    date: "2020-04-06",
  },
  {
    id: "aef928c2-012e-4b99-a543-174d3d1f4912",
    memo:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    amount: 1365.58,
    category: "",
    date: "2020-04-20",
  },
  {
    id: "ae16867d-b8d2-45e1-b313-1edb18d0b4c9",
    memo:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    amount: 1963.33,
    category: "c-2",
    date: "2020-05-30",
  },
  {
    id: "235c7304-0b5e-4cf5-aa34-0075d999682e",
    memo: "Fusce consequat. Nulla nisl. Nunc nisl.",
    amount: 1201.51,
    category: "c-4",
    date: "2020-10-16",
  },
  {
    id: "10cb440f-ca61-4920-832e-4b769e19f735",
    memo:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    amount: 1227.99,
    category: "c-2",
    date: "2020-05-04",
  },
  {
    id: "5a50009e-dfdb-412d-a281-3688b97c8cb6",
    memo:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    amount: 602.11,
    category: "c-1",
    date: "2020-06-02",
  },
  {
    id: "0f0f3479-8e17-455d-bdef-1e19af1dbdd6",
    memo:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    amount: 1658.16,
    category: "c-6",
    date: "2020-09-02",
  },
  {
    id: "dc0df73e-5be3-4428-8ce3-a6a091625ac3",
    memo: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    amount: 469.54,
    category: "c-2",
    date: "2020-03-20",
  },
  {
    id: "2375c13b-2ebe-46b8-8956-2b231c1712d9",
    memo:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    amount: 52.68,
    category: "c-8",
    date: "2020-05-26",
  },
  {
    id: "6b5b34f2-5c4b-4079-89fc-e91539506a6f",
    memo:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    amount: 246.74,
    category: "c-1",
    date: "2020-10-28",
  },
  {
    id: "4267b404-f9db-4b23-b54b-9b9e6096db50",
    memo:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    amount: 478.56,
    category: "c-7",
    date: "2020-10-06",
  },
  {
    id: "6899d0a8-7e78-4c0f-a3e7-2f929eb673c0",
    memo:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    amount: 1514.76,
    category: "c-5",
    date: "2020-04-15",
  },
  {
    id: "7aee208d-b1d7-4a8a-b2b8-dde44b45570e",
    memo:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    amount: 1358.01,
    category: "",
    date: "2020-04-26",
  },
  {
    id: "c2b32216-6077-4617-a3b3-8c92bf35a717",
    memo:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    amount: 1287.02,
    category: "c-7",
    date: "2020-01-23",
  },
  {
    id: "27fb447b-179e-4e77-a9ae-d534064c0094",
    memo:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    amount: 1051.4,
    category: "c-4",
    date: "2019-12-23",
  },
  {
    id: "7f32a7df-9882-4e56-aaef-d8a5acf00ee9",
    memo:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    amount: 1346.09,
    category: "c-2",
    date: "2020-02-04",
  },
  {
    id: "51ea53d5-d4e8-4905-b426-d75e8b094ad1",
    memo:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    amount: 853.0,
    category: "c-3",
    date: "2020-10-26",
  },
  {
    id: "6cb4d2aa-dbc1-4a6a-b792-e80f6cd38069",
    memo:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    amount: 1947.27,
    category: "c-2",
    date: "2020-07-19",
  },
  {
    id: "d1b4bfa3-ce3c-4ac1-a94a-9cd689d990d8",
    memo: "Fusce consequat. Nulla nisl. Nunc nisl.",
    amount: 1491.36,
    category: "c-3",
    date: "2020-03-16",
  },
  {
    id: "5f3285b9-2cda-4bce-abbf-29759069e758",
    memo:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    amount: 1283.88,
    category: "c-1",
    date: "2020-05-03",
  },
  {
    id: "3e470d52-f433-42fd-9586-fba2fff996dd",
    memo:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    amount: 1996.65,
    category: "c-2",
    date: "2020-01-13",
  },
  {
    id: "cfe972b5-d034-4f5b-833b-d65a1a6e948e",
    memo: "Fusce consequat. Nulla nisl. Nunc nisl.",
    amount: 405.47,
    category: "c-4",
    date: "2020-03-30",
  },
  {
    id: "26f3d64d-768b-4b86-9166-00a8783e8905",
    memo: "Fusce consequat. Nulla nisl. Nunc nisl.",
    amount: 1146.19,
    category: "c-4",
    date: "2020-10-07",
  },
  {
    id: "966741d1-2261-4c88-92cf-aafbed6345db",
    memo: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    amount: 821.67,
    category: "c-8",
    date: "2020-09-08",
  },
  {
    id: "d7afcd8b-a195-4300-a6ed-2aa67c962b96",
    memo:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    amount: 49.07,
    category: "c-2",
    date: "2020-05-05",
  },
  {
    id: "55333f2b-4e0b-4a46-ae5a-c706473b1491",
    memo:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    amount: 716.58,
    category: "",
    date: "2019-12-23",
  },
  {
    id: "239a4b6e-e482-4379-a708-85d9f209e5f6",
    memo:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    amount: 872.08,
    category: "c-1",
    date: "2020-02-02",
  },
  {
    id: "864d2f6a-4f55-4a08-ab99-3b8f26b0becd",
    memo:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    amount: 1687.88,
    category: "",
    date: "2020-01-13",
  },
  {
    id: "d9ba9972-6495-484a-9e33-03dc02ff1860",
    memo:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    amount: 243.43,
    category: "",
    date: "2020-06-27",
  },
  {
    id: "a877331f-1705-467d-8f9b-ae09db938cb3",
    memo:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    amount: 1097.1,
    category: "c-4",
    date: "2020-06-29",
  },
  {
    id: "d683705e-85b2-4990-9adb-ab656079f4aa",
    memo:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    amount: 458.42,
    category: "c-1",
    date: "2020-10-09",
  },
  {
    id: "df7deb3b-a0f7-4201-b4fd-083b138fa75a",
    memo:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    amount: 894.51,
    category: "c-6",
    date: "2020-02-23",
  },
  {
    id: "c5e4b7b7-a342-4de8-a7e4-69b4cf308e4b",
    memo:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    amount: 1299.44,
    category: "c-4",
    date: "2020-11-12",
  },
  {
    id: "6d7dd5ee-0fec-4bc1-a6b4-3ea016f55e0d",
    memo:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    amount: 222.72,
    category: "c-3",
    date: "2020-02-20",
  },
  {
    id: "30a7bf90-0de9-42db-8543-4435a186a560",
    memo:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    amount: 308.42,
    category: "c-8",
    date: "2020-09-17",
  },
  {
    id: "65ea7869-0dcc-414a-a3cc-d97a05a7d254",
    memo:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    amount: 421.37,
    category: "c-5",
    date: "2020-09-14",
  },
  {
    id: "8d39d30b-555a-43aa-b26d-b170c2687ecd",
    memo:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    amount: 1329.51,
    category: "c-3",
    date: "2020-08-27",
  },
  {
    id: "ae951c63-e8cf-4428-bd7e-371a35428c16",
    memo:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    amount: 1921.59,
    category: "c-8",
    date: "2020-06-19",
  },
  {
    id: "74aabaeb-4f90-434f-a713-cb942a54407b",
    memo:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    amount: 1222.76,
    category: "c-8",
    date: "2020-02-29",
  },
  {
    id: "5e601c46-ca9d-4fa6-aad2-a3e1ba6a0079",
    memo:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    amount: 908.35,
    category: "c-4",
    date: "2020-08-27",
  },
  {
    id: "97100922-0dc0-43c8-a980-c622f99217b8",
    memo:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    amount: 892.26,
    category: "",
    date: "2020-10-23",
  },
  {
    id: "febfedf1-fd6a-4b45-9b90-d943b0e46d51",
    memo:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    amount: 632.21,
    category: "c-3",
    date: "2020-02-03",
  },
  {
    id: "ca6f4cbc-064b-46dc-a3ba-d73f3ec4bf29",
    memo:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    amount: 1766.14,
    category: "c-6",
    date: "2020-08-08",
  },
  {
    id: "b02e248e-85bc-42e1-86a4-de0c6de138a8",
    memo:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    amount: 1240.13,
    category: "c-2",
    date: "2020-01-11",
  },
  {
    id: "d05938dc-5e66-4de5-95b5-fc92d33ed08a",
    memo:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    amount: 1543.7,
    category: "c-5",
    date: "2020-09-17",
  },
  {
    id: "a900fffe-46c5-4ff4-92d6-bfc6b42000b8",
    memo:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    amount: 1011.92,
    category: "c-4",
    date: "2020-06-28",
  },
  {
    id: "17a62422-13eb-4dc6-aaec-d100448cbab1",
    memo:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    amount: 979.75,
    category: "c-4",
    date: "2019-12-26",
  },
  {
    id: "ed676c54-079a-4845-a541-9548d7f9b6a7",
    memo:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    amount: 179.56,
    category: "c-6",
    date: "2020-05-17",
  },
  {
    id: "ea33f33a-0ee3-4a03-9168-df7e7c0a0593",
    memo:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    amount: 1833.03,
    category: "c-1",
    date: "2020-07-05",
  },
  {
    id: "6e2c2d4f-eb46-43ea-bade-0c3201ec10ed",
    memo:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    amount: 172.87,
    category: "c-4",
    date: "2020-11-06",
  },
  {
    id: "f13fdda9-f0c4-4738-89ae-40d863b15900",
    memo:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    amount: 48.37,
    category: "c-6",
    date: "2020-04-22",
  },
  {
    id: "b7129a1d-bbe6-4745-95e0-f66d9b6c18d5",
    memo:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    amount: 1062.78,
    category: "",
    date: "2020-01-26",
  },
  {
    id: "15cc326e-91fa-49b6-a6a7-0f3c48c081de",
    memo:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    amount: 728.56,
    category: "c-1",
    date: "2020-11-06",
  },
  {
    id: "dae36ac9-bbdc-4436-b1a2-64ddf520a338",
    memo:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    amount: 1996.48,
    category: "c-5",
    date: "2020-10-10",
  },
  {
    id: "683faf9b-2c21-42d8-a0bb-801b0c574dd3",
    memo:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    amount: 175.07,
    category: "c-2",
    date: "2020-04-30",
  },
  {
    id: "acda3b72-e66a-44c4-851c-694569f4e7c5",
    memo: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    amount: 519.57,
    category: "c-7",
    date: "2020-11-18",
  },
  {
    id: "e43d206f-9ef6-4ede-8e48-98611377f53b",
    memo:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    amount: 1699.84,
    category: "c-4",
    date: "2020-04-10",
  },
  {
    id: "fb269f62-f5c5-4b72-9524-0a3f47b933f5",
    memo:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    amount: 410.86,
    category: "c-5",
    date: "2020-02-08",
  },
  {
    id: "a867c5db-ae50-449e-ba65-17dba7de5c16",
    memo:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    amount: 1795.79,
    category: "c-2",
    date: "2020-03-24",
  },
  {
    id: "b7a7de56-ad5a-43e4-867b-3d06f483ca45",
    memo:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    amount: 1931.86,
    category: "c-5",
    date: "2020-02-05",
  },
  {
    id: "2de060a6-65bf-4397-ac0c-017252128597",
    memo:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    amount: 774.26,
    category: "c-8",
    date: "2020-06-12",
  },
  {
    id: "f78c499e-2afd-48e9-a0d4-8c75acbc9368",
    memo:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    amount: 1086.59,
    category: "",
    date: "2020-04-03",
  },
  {
    id: "6ea75f9a-ecfc-473f-9130-cbd7fa4dade9",
    memo:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    amount: 1397.58,
    category: "c-2",
    date: "2020-06-23",
  },
  {
    id: "895e7b3a-023e-4d7e-b846-df46c0838ff0",
    memo:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    amount: 176.38,
    category: "c-2",
    date: "2020-04-09",
  },
  {
    id: "35fc17d9-48fd-4f5d-87ab-ab9f3c30b6d1",
    memo:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    amount: 1973.31,
    category: "c-8",
    date: "2019-11-24",
  },
  {
    id: "0f8e8973-8731-4824-ae57-2ee4180cddf9",
    memo:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    amount: 1267.16,
    category: "c-2",
    date: "2020-07-14",
  },
  {
    id: "2c88e070-8727-48cd-839a-4e325695b7f7",
    memo:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    amount: 1951.87,
    category: "c-2",
    date: "2020-09-24",
  },
  {
    id: "5526da79-5f73-449b-9980-6002cadaabea",
    memo:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    amount: 896.78,
    category: "c-6",
    date: "2020-03-24",
  },
  {
    id: "28d621fb-2dee-4bfb-bf21-0081c56d22a5",
    memo:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    amount: 958.47,
    category: "c-2",
    date: "2020-09-06",
  },
  {
    id: "769a70c8-5f28-4d85-9bb9-94f3b7cc1781",
    memo:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    amount: 924.12,
    category: "c-1",
    date: "2020-10-25",
  },
  {
    id: "558a2f84-d29a-41e3-8605-c682bb4b322a",
    memo:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    amount: 1754.64,
    category: "c-5",
    date: "2020-02-13",
  },
];
const categories = [
  {
    id: "c-1",
    color: "#FF595E",
    name: "Food",
    categoryType: "EXPENSE",
  },
  {
    id: "c-2",
    color: "#8AC926",
    name: "Clothing",
    categoryType: "INCOME",
  },
  {
    id: "c-3",
    color: "#FFCA3A",
    name: "Medical/Healthcare",
    categoryType: "EXPENSE",
  },
  {
    id: "c-4",
    color: "#1982C4",
    name: "Education",
    categoryType: "EXPENSE",
  },
  {
    id: "c-5",
    categoryType: "EXPENSE",
    name: "Insurance",
    color: "#3f75f3",
  },
  {
    id: "c-6",
    color: "#74c69d",
    name: "Real Assets",
    categoryType: "INCOME",
  },
  {
    id: "c-7",
    color: "#370617",
    name: "Cash",
    categoryType: "INCOME",
  },
  {
    id: "c-8",
    categoryType: "INCOME",
    name: "Stock",
    color: "#03045e",
  },
];

localStorage.setItem("transactions", JSON.stringify(transactions));
localStorage.setItem("categories", JSON.stringify(categories));

window.location.reload();
