export interface EmployeeDTO {
  branchId: string;
  /**
   * example:
   * 100
   */
  capacityPercent: number | null; // int64
  cityId: string;
  /**
   * example:
   * kizil.kukushkin@open.ru
   */
  email: string | null;
  employer: {
    /**
     * example:
     * 1
     */
    id: number; // int32
    /**
     * example:
     * Газпромбанк
     */
    name: string;
  };
  employerId: number; // int32
  /**
   * example:
   * 10:00
   */
  fromTime: string;
  id: string;
  /**
   * example:
   * gpbu666
   */
  login: string | null;
  name: string;
  /**
   * example:
   * 0
   */
  overCountInInterval: number | null; // int64
  /**
   * example:
   * 2016-01-01
   */
  startWork: string;
  /**
   * example:
   * 18:00
   */
  toTime: string;
  /**
   * example:
   * logistic-admin
   */
  updatedByService: string | null;
  /**
   * email сотрудника банка, который обновляет доставку
   * example:
   * sozd@val.shik
   */
  updatedByUser: string | null;
  /**
   * example:
   * ACTIVE
   */
  status: {
    /**
     * example:
     * ACTIVE
     */
    code: "ACTIVE" | "BLOCKED" | "DELETED";
    /**
     * example:
     * Активный
     */
    name: string;
  };
}


export const data: EmployeeDTO[] = [ {
  "id" : "58102223-adfd-40f4-aba1-b312f69a5fdb",
  "name" : "1223",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "02000001000000000000000",
  "branchId" : "8246",
  "startWork" : "2114-09-08",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "еееее@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "2c48308e-68ab-4614-8552-b23d181faf7c",
  "name" : "регр представитель уфимский",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "02000001000000000000000",
  "branchId" : "8246",
  "startWork" : "2019-11-12",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "gpbu11111",
  "email" : "ufa.pr@mail.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "10bdb567-7b02-477b-93b1-9505aae7815c",
  "name" : "Заморский М.Л.",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "02000001000000000000000",
  "branchId" : "8246",
  "startWork" : "1869-09-08",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "gpbu11112",
  "email" : "gri@mail.ru",
  "capacityPercent" : 110,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "e098e673-e109-4c5e-9db3-09594e932500",
  "name" : "Быстрый Резкий Представляющий",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "12000001000000000000000",
  "branchId" : "7121",
  "startWork" : "2020-07-10",
  "fromTime" : "09:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "fast",
  "email" : "yoshkar@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "bab3a4eb-5231-48fe-a08d-45fe9417612b",
  "name" : "Курьер Шерон",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "16000001000000000000000",
  "branchId" : "8249",
  "startWork" : "2021-02-12",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "lgs-sharon-courier@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "24312317-427a-4a2d-be17-12f26083a33a",
  "name" : "тестовый маил второй",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "16000001000000000000000",
  "branchId" : "8249",
  "startWork" : "2019-11-08",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "test101",
  "email" : "test222222@gjkjttttttttttttttttttttt.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "278059e6-580c-4082-9711-e4946cfc5904",
  "name" : "1",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "16000001000000000000000",
  "branchId" : "8249",
  "startWork" : "2019-10-14",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "one",
  "email" : "drrrser444444@gthtyj.htfujt",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "f65ec7cd-22eb-4ff9-9ab9-5a33520b11c1",
  "name" : "Мама мыла раму 1234",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "16000001000000000000000",
  "branchId" : "8249",
  "startWork" : "2019-09-05",
  "fromTime" : "08:00",
  "toTime" : "15:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "asd123",
  "email" : "asd123@log.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "61b66315-8fdc-47cd-b378-2e470b46b186",
  "name" : "Афонасьев Грегоги Васильевич",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "16000001000000000000000",
  "branchId" : "8249",
  "startWork" : "2019-10-11",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "afonciev",
  "email" : "afoc@exampl.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "7a198ec7-95c2-4919-9866-a0a13123543e",
  "name" : "Смирнов Владимир",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "16000001000000000000000",
  "branchId" : "8249",
  "startWork" : "2019-08-13",
  "fromTime" : "08:00",
  "toTime" : "17:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy5",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "2bd1d3b1-b3a5-43b8-99ff-1198d9f292aa",
  "name" : "альметьевский курьер первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "16000002000000000000000",
  "branchId" : "6162",
  "startWork" : "2020-09-24",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy11",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "30b5ab73-bf44-41c1-bc2e-b8d40254eaaa",
  "name" : "ижевский курьер первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "18000001000000000000000",
  "branchId" : "7181",
  "startWork" : "2020-03-16",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "ig@mail.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "91295896-9e87-426a-bb38-9532c75580f9",
  "name" : "Митронов Алексей",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "23000001000000000000000",
  "branchId" : "8373",
  "startWork" : "2019-08-28",
  "fromTime" : "08:00",
  "toTime" : "17:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "e2a5684b-d269-487d-9267-afe9f6227a39",
  "name" : "краснодарский курьер первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "23000001000000000000000",
  "branchId" : "8373",
  "startWork" : "2019-10-23",
  "fromTime" : "09:00",
  "toTime" : "18:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "e1d23e30-d8e3-43d6-9d11-91675693b835",
  "name" : "    111     ",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "23000001000000000000000",
  "branchId" : "8373",
  "startWork" : "2019-10-01",
  "fromTime" : "12:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "38c94771-9b08-46d5-a887-10609d1604d5",
  "name" : "56767",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "23000001000000000000000",
  "branchId" : "8373",
  "startWork" : "2019-10-18",
  "fromTime" : "09:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "757b6df4-a83d-46fe-bf23-5fc462f7f3f0",
  "name" : "Смирнов Игорь",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "24000001000000000000000",
  "branchId" : "8244",
  "startWork" : "2019-08-01",
  "fromTime" : "08:00",
  "toTime" : "12:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "c4a59845-1aec-4335-abbb-6e6a1a4084fb",
  "name" : "XXX",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "24000001000000000000000",
  "branchId" : "8244",
  "startWork" : "2021-07-21",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "asfas@gmail.com",
  "capacityPercent" : null,
  "overCountInInterval" : null,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "5496fef2-c84b-4806-af31-60bf7b101bfa",
  "name" : "123333",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "25000001000000000000000",
  "branchId" : "7251",
  "startWork" : "2020-04-30",
  "fromTime" : "08:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "elenafedorova@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "118dc851-dc88-4a0e-bf78-1f720f34a6d0",
  "name" : "ставропольский представитель первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "26000001000000000000000",
  "branchId" : "6261",
  "startWork" : "2020-10-14",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy9",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "065a9e38-7451-4214-8752-969a8fa66365",
  "name" : "Астраханский Представитель Курьерович",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "30000001000000000000000",
  "branchId" : "7301",
  "startWork" : "2020-09-15",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "asdasdasd@asdasdasd.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "24d61e95-dfa1-4963-a3ce-4ec7b115cfa7",
  "name" : "Курьер Астрахань",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "30000001000000000000000",
  "branchId" : "7301",
  "startWork" : "2020-03-16",
  "fromTime" : "09:00",
  "toTime" : "13:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "astrahan@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "a971256d-c589-41c5-b0ad-8fbd5df5b02f",
  "name" : "апавввввввввввввв",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "30000001000000000000000",
  "branchId" : "7301",
  "startWork" : "2020-06-11",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "ffff@gggg.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "22c1b22e-f93b-43d2-89c9-94b31fb1cdc0",
  "name" : "брянский курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "32000001000000000000000",
  "branchId" : "6321",
  "startWork" : "2020-07-01",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy10",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "f5045d7b-282c-4f8b-a12f-8aeb990e265d",
  "name" : "Представитель Волгограда",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2020-09-22",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "volg@gmail.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b35d81ff-4731-49d7-b429-d7b117ffc897",
  "name" : "EmployeeName",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-11-08",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tet@asdf.rus",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "bea053fa-6e44-4b09-a219-235ac8821d14",
  "name" : "Максимальное кол-во ДобавитьМаксимальное кол-во ДобавитьМаксимальное кол-во ДобавитьМаксимальное кол-во ДобавитьМаксимальное кол-во ДобавитьМаксимальное кол-во ДобавитьМаксимальное кол-во ДобавитьМаксимальное кол-во ДобавитьМаксимальное кол-во ДобавитьМа",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-19",
  "fromTime" : "08:00",
  "toTime" : "12:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "test_mail@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "a6287675-35fe-46ca-9b8f-1b0fac8314d7",
  "name" : "Соколов Валерий Анатольевич",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-24",
  "fromTime" : "09:00",
  "toTime" : "18:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "0b42d2d3-88aa-4617-abfb-5d82adf5a8ce",
  "name" : "нннннннннннннннннннннннннннннннннннннннннннннннннннннннннррррррррррррррррррррррррррррррррррррррррррррррррррррррррррррррррррррршшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшпппппппппппппппппппппппппппппппппп",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-26",
  "fromTime" : "09:00",
  "toTime" : "12:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "0ab4bfe0-86df-482a-b9c0-80716ff01336",
  "name" : " Безымянный Курьер1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-24",
  "fromTime" : "11:00",
  "toTime" : "14:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "ваууууу@fgfj.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "9c50cfe7-f539-4559-845f-0fda8a1c4a30",
  "name" : "Никитин Александр Александрович",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-08-08",
  "fromTime" : "08:00",
  "toTime" : "12:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b4a0499c-5c17-408f-8e30-8080b05d464d",
  "name" : "ккккккк54",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-12",
  "fromTime" : "08:00",
  "toTime" : "11:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "36ea52aa-0e11-4d11-aa5c-47097ee374b0",
  "name" : "255 Тест",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-09",
  "fromTime" : "08:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "04524e36-c4e2-4388-b71f-5db8ccd13b1e",
  "name" : "  а  ",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-12",
  "fromTime" : "08:00",
  "toTime" : "17:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "5c14ed05-4e2a-46f1-88b4-c56f2f1132d9",
  "name" : "Николай Николай Коля",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-27",
  "fromTime" : "10:00",
  "toTime" : "14:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "ddddd@cvdvfv.fvfvf",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "61937bcf-4937-429a-ac79-e6ef954cb229",
  "name" : "бе",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-12",
  "fromTime" : "10:00",
  "toTime" : "17:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "2cdd3ce9-f6df-4808-a2cb-f53347f704e6",
  "name" : "b",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000001000000000000000",
  "branchId" : "8251",
  "startWork" : "2019-09-12",
  "fromTime" : "08:00",
  "toTime" : "13:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd111@tdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "192f37e3-da3d-438d-8775-b8589a2d4e7e",
  "name" : "волжский курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "34000002000000000000000",
  "branchId" : "63421",
  "startWork" : "2020-07-01",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy25",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "1e99a056-7cbf-461e-9fec-ba62961850e8",
  "name" : "Череповец",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "35000002000000000000000",
  "branchId" : "6352",
  "startWork" : "2021-07-27",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "cherepovec",
  "email" : "cherepovec@gazprombank.ru",
  "capacityPercent" : 130,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "69ac0708-eba1-451c-ba24-8f54e443f625",
  "name" : "Дубликат email",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "36000001000000000000000",
  "branchId" : "8242",
  "startWork" : "2019-11-04",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "pp@ii.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "7fec9585-e877-453f-adca-db4d05515dc5",
  "name" : "123123",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "36000001000000000000000",
  "branchId" : "8242",
  "startWork" : "2019-09-12",
  "fromTime" : "08:00",
  "toTime" : "17:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "af81a4c4-d042-4ca8-8284-217279ab1dc6",
  "name" : "Петя Макаров",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "36000001000000000000000",
  "branchId" : "8242",
  "startWork" : "2019-08-01",
  "fromTime" : "08:00",
  "toTime" : "17:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "c6041f24-2b27-499b-9b90-ba19bb87c876",
  "name" : "5 кукукукукук",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "36000001000000000000000",
  "branchId" : "8242",
  "startWork" : "2019-09-25",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "d97c7638-b6ad-41e7-88e8-55d94bcfed5f",
  "name" : "ppp",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "36000001000000000000000",
  "branchId" : "8242",
  "startWork" : "2019-11-07",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tt@tt.eu",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "6dbaff01-b85d-4d3b-8950-6168eefdd7e7",
  "name" : " н н",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "36000001000000000000000",
  "branchId" : "8242",
  "startWork" : "2019-09-27",
  "fromTime" : "08:00",
  "toTime" : "14:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "f2a62edb-fb76-4922-813a-63bd70967cb3",
  "name" : "Фамилия Имя",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "36000001000000000000000",
  "branchId" : "8242",
  "startWork" : "2019-12-21",
  "fromTime" : "11:00",
  "toTime" : "14:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "ааа@mfvd.rewf",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "46e32d61-c633-447e-b84c-1eff94401f68",
  "name" : "иркутский представитель 2",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "38000003000000000000000",
  "branchId" : "7381",
  "startWork" : "2020-09-22",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "f444433d@tdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "28f69462-0cfd-4e4b-90c1-fcbbdbcb41aa",
  "name" : "Иркутский Представитель Курьерович",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "38000003000000000000000",
  "branchId" : "7381",
  "startWork" : "2020-08-01",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "asdasd@asdasd.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "ea6a548d-d58a-4904-9228-2ce19e7c97e9",
  "name" : "иркутский представитель 1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "38000003000000000000000",
  "branchId" : "7381",
  "startWork" : "2020-09-22",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdtкккh.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "6d5b0c01-4b12-4825-997c-376591298fce",
  "name" : "ака ауке  куе",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "38000003000000000000000",
  "branchId" : "7381",
  "startWork" : "2020-09-22",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy1",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "6307010c-35c5-499b-bf7e-f8399de96d46",
  "name" : "ангарский представитель 1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "38000003000000000000000",
  "branchId" : "7381",
  "startWork" : "2020-09-22",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy3",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "83c133a1-1ec2-4b2d-bf5a-f936cce7ad36",
  "name" : "ангарский представитель 1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "38000003000000000000000",
  "branchId" : "7381",
  "startWork" : "2020-09-22",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy2",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "c57a86db-577c-40fd-8fc3-4aae97797d4e",
  "name" : "ангарский представитель 1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "38000004000000000000000",
  "branchId" : "7381",
  "startWork" : "2020-09-21",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "angarsk1@ghjg.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "471385cd-8b09-4483-971a-d87df489ab96",
  "name" : "ангарский представитель 1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "38000004000000000000000",
  "branchId" : "7381",
  "startWork" : "2020-09-22",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy26",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b8d1ddb8-1971-411d-8a62-521e8f3110a6",
  "name" : "калининградский курьер первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "39000001000000000000000",
  "branchId" : "7391",
  "startWork" : "2020-03-16",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "klngr@mail.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "2a668fdb-f3bb-4d82-ace4-9b19b1bc5971",
  "name" : "калужский курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "40000001000000000000000",
  "branchId" : "6401",
  "startWork" : "2020-07-01",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy23",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "59bdc33a-28a4-4dc5-a336-a92c0a7071df",
  "name" : "березовский представитель первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "42000009000000000000000",
  "branchId" : "7429",
  "startWork" : "2020-10-14",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy6",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "ca939fed-9dc7-4933-b7b4-e841439c1bc4",
  "name" : "Кемерово",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "42000009000000000000000",
  "branchId" : "7429",
  "startWork" : "2021-10-25",
  "fromTime" : "08:00",
  "toTime" : "18:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : "kemero1",
  "email" : "g@com.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "d245849b-b909-4b1b-b407-586bf98ac199",
  "name" : "Представитель 2021 июль тест нагрузки",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "52000001000000000000000",
  "branchId" : "8248",
  "startWork" : "2021-07-14",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "exmplo@test.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "c66ff68d-3fad-4181-8174-1d1cdcdd98f6",
  "name" : "Нижний Верхний",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "52000001000000000000000",
  "branchId" : "8248",
  "startWork" : "2020-07-10",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "nizberh@gmail.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b68f3f2c-f66f-41b1-9651-0fb59e0c4a75",
  "name" : "новгородский курьер первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "52000001000000000000000",
  "branchId" : "8248",
  "startWork" : "2020-11-18",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy15",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "ecbb4123-65ad-459e-b507-df07f60f0524",
  "name" : "Курьер Шерон",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "54000001000000000000000",
  "branchId" : "8240",
  "startWork" : "2020-11-24",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "lgs-sharon-courier2@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "4d678c86-a985-4625-87ae-f266b456819b",
  "name" : "Митрохин Максим 123111",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "54000001000000000000000",
  "branchId" : "8240",
  "startWork" : "2019-08-01",
  "fromTime" : "08:00",
  "toTime" : "11:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "abac8056-4975-4f77-b1e7-b32c94db6847",
  "name" : "Новосибский Сибир Морозович",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "54000001000000000000000",
  "branchId" : "8240",
  "startWork" : "2019-12-09",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "sib@moroz.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b90adc40-a27c-43b8-8c3d-a91dd238b03d",
  "name" : "Никитин Сергей",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "54000001000000000000000",
  "branchId" : "8240",
  "startWork" : "2019-09-01",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "fd@tdth.kuy20",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "f3b88058-576f-4f32-bfeb-15b9d68658ee",
  "name" : "Иванов Павел Сергеевич",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "55000001000000000000000",
  "branchId" : "8243",
  "startWork" : "2019-09-01",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "fd@tdth.kuy19",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "6d308bae-071d-4d1f-bb75-14eb95451e16",
  "name" : "Фруктовый Лимон Гранатович",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "55000001000000000000000",
  "branchId" : "8243",
  "startWork" : "2019-09-13",
  "fromTime" : "10:00",
  "toTime" : "15:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy17",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "aea87247-fa21-4691-82b2-a3a3aeb239fd",
  "name" : "орловский курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "57000001000000000000000",
  "branchId" : "6571",
  "startWork" : "2020-07-01",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy24",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "7ccb0727-f2b1-4dd1-9d9f-15b78ab37147",
  "name" : "Кто-то едет",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "59000001000000000000000",
  "branchId" : "8250",
  "startWork" : "2020-02-11",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "kto@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "626d7a73-0356-48e5-b8c5-a4347ec4ef61",
  "name" : "Кукушка",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "59000001000000000000000",
  "branchId" : "8250",
  "startWork" : "2019-09-30",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "kukuha@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "c55f534a-092c-4237-96fd-ae7e4a695dbd",
  "name" : "Стенов Стен Стенович",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "59000001000000000000000",
  "branchId" : "8250",
  "startWork" : "2020-08-18",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "lgs-stan-courier2@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b6388358-ceff-4758-a238-b026991d76c2",
  "name" : "Ростовский Курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "61000001000000000000000",
  "branchId" : "8241",
  "startWork" : "2020-12-14",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "rostov@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "47a493c0-926d-4d88-854d-19e19a267073",
  "name" : "рязанский курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "62000001000000000000000",
  "branchId" : "6621",
  "startWork" : "2020-07-01",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy21",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "4bb1552d-32ea-433e-b507-85d4bc4d6482",
  "name" : "Город-Сказка Город Мечтаевичаааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "63000001000000000000000",
  "branchId" : "8247",
  "startWork" : "1987-12-11",
  "fromTime" : "11:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "148e0233-524d-487e-bcf5-d83bd6acdf55",
  "name" : "Горный-Орлов Егор Тимофеевич",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "63000001000000000000000",
  "branchId" : "8247",
  "startWork" : "2019-09-16",
  "fromTime" : "09:00",
  "toTime" : "16:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : null,
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "0ba9d339-b9a0-4bb1-820c-3e69db822346",
  "name" : "1 2 3",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "63000007000000000000000",
  "branchId" : "6637",
  "startWork" : "2020-12-29",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy16",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "65801aaf-a6f4-45fe-8807-4b97d8f1e0d0",
  "name" : "Энгельс1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "64000001000000000000000",
  "branchId" : "7641",
  "startWork" : "2020-12-14",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "engels@test.test",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "1970c5ec-84d9-4898-93ed-a762397ed7bf",
  "name" : "Саратов Энгельс",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "64000001000000000000000",
  "branchId" : "7641",
  "startWork" : "2020-07-10",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "saratov@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "334f21b4-589a-42ea-aebd-165e4bac2ae4",
  "name" : "авп уеу ке",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "64000004000000000000000",
  "branchId" : "7641",
  "startWork" : "2020-09-21",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy7",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b58b7fe2-05cc-470c-8b1c-5fc1f4edeb6e",
  "name" : "екб курьер 5",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "66000001000000000000000",
  "branchId" : "8151",
  "startWork" : "2021-02-11",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "564564@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b6451f3c-7ef3-4735-8264-164b9bb1a549",
  "name" : "Стенов Стен Екат",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "66000001000000000000000",
  "branchId" : "8151",
  "startWork" : "2021-02-12",
  "fromTime" : "10:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "lgs-stan-courier@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "4f9652fe-97ce-4ef7-b11f-7fe85c74082d",
  "name" : "екб курьер 1",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "66000001000000000000000",
  "branchId" : "8151",
  "startWork" : "2019-09-13",
  "fromTime" : "09:00",
  "toTime" : "17:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "645765@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b5a09d8b-d31d-4f78-a186-e67ad626255e",
  "name" : "екб курьер 3",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "66000001000000000000000",
  "branchId" : "8151",
  "startWork" : "2021-02-11",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "645645@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "159fffb5-c36a-4879-8c93-aef66e27dd49",
  "name" : "екб курьер 4",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "66000001000000000000000",
  "branchId" : "8151",
  "startWork" : "2021-02-11",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "56575@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "43685f34-0d95-44c1-b7a5-9c6eace4bba3",
  "name" : "екб курьер 2",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "66000001000000000000000",
  "branchId" : "8151",
  "startWork" : "2020-09-30",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "fd@tdth.kuy28",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "994d8a8c-d0bf-4614-a3be-d17285f3f741",
  "name" : "смоленский курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "67000003000000000000000",
  "branchId" : "6673",
  "startWork" : "2020-07-01",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy22",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "c99de805-0568-4631-b801-cd617922abd6",
  "name" : "томский томск",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "70000001000000000000000",
  "branchId" : "7701",
  "startWork" : "2020-03-13",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tomsk@mail.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "9ffe1e28-2951-444c-8101-afc712c70a1f",
  "name" : "томский четвертый представитель",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "70000001000000000000000",
  "branchId" : "7701",
  "startWork" : "2020-05-13",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fssd@tdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "4783f72e-36ef-4d31-a46e-359ec7803902",
  "name" : "томский второй курьер",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "70000001000000000000000",
  "branchId" : "7701",
  "startWork" : "2020-05-13",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdfdfdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b96d9a2e-02ed-413b-be66-a62d75a4bacb",
  "name" : "томский пятый представитель",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "70000001000000000000000",
  "branchId" : "7701",
  "startWork" : "2020-05-13",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "frtwrtertd@tdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "1ffaa538-e13a-4582-858d-b2a4f65bd704",
  "name" : "томский третий представитель",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "70000001000000000000000",
  "branchId" : "7701",
  "startWork" : "2020-05-13",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fdsgdfg@tfgdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "8700438b-3506-4081-a937-2baf588b8c83",
  "name" : "тула 1",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "71000001000000000000000",
  "branchId" : "7711",
  "startWork" : "2020-05-13",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tula@tula.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "18432824-7fe3-423e-93c1-890ddab1989d",
  "name" : "тула 2",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "71000001000000000000000",
  "branchId" : "7711",
  "startWork" : "2020-05-13",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tula2@tula.tu",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "886f5c16-0bf3-4192-a89c-16b452409933",
  "name" : "тула 3",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "71000001000000000000000",
  "branchId" : "7711",
  "startWork" : "2020-05-13",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tula3@tula.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "df88dae9-e492-4a7a-8455-0dd7fae0ac36",
  "name" : "Тюмен Тюмено Тюм",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "72000001000000000000000",
  "branchId" : "7721",
  "startWork" : "2020-07-02",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tumen@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "6e977515-206b-4447-b03d-b8d3db8331c8",
  "name" : "Курьер Челябинска",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "74000001000000000000000",
  "branchId" : "8245",
  "startWork" : "2020-01-31",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "kura@gmail.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "bae44da6-c534-4ebc-927c-6d7a5b12e3e6",
  "name" : "челябинск тест",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "74000001000000000000000",
  "branchId" : "8245",
  "startWork" : "2020-01-31",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "sdf@asdf.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "c52a7075-478b-4928-b6a6-00b99e1dba7f",
  "name" : "челябинск тест3",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "74000001000000000000000",
  "branchId" : "8245",
  "startWork" : "2020-02-16",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "testchel@test.ri",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "e7678c36-e017-4945-bebc-876dd328889c",
  "name" : "челябинский курьер разногородский",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "74000001000000000000000",
  "branchId" : "8245",
  "startWork" : "2020-10-09",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy8",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "a682f2a0-b146-43df-90bd-2497579785ec",
  "name" : "челябинский-озерский курьер тестович1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "74000001000000000000000",
  "branchId" : "8245",
  "startWork" : "2020-09-25",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy13",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "eeb82ec7-96d0-439a-b06a-eb5094830a77",
  "name" : "очередной челябинский курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "74000001000000000000000",
  "branchId" : "8245",
  "startWork" : "2020-09-30",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy14",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "30e6872e-e84d-43ff-9c15-7286bd6dc004",
  "name" : "Тестовый маил представителя",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-11-09",
  "fromTime" : "10:00",
  "toTime" : "15:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "test1mail@mu.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "bd3fd6f2-8b56-4215-8131-c40cb0ae5b4c",
  "name" : "Петров Игорь Николаевич",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-10-24",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd2@tdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "a62fdab0-6496-4129-a8be-853f4fb033a8",
  "name" : "Фирсов Анатолий",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-07-01",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd1@tdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "ebb715fa-e931-47c0-90de-f7ca2a9b67e4",
  "name" : "Марк Трофимов",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-06-01",
  "fromTime" : "09:00",
  "toTime" : "15:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "k.ivanov@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "db1a883f-9e81-4940-9a37-31e606faca4b",
  "name" : "testresh7",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-25",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "testresh7@asdf.r",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "ceeb60be-06de-40a5-bf5d-48cc7351dea8",
  "name" : "Тестовый Представитель Андрея",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2021-06-01",
  "fromTime" : "13:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "test1",
  "email" : "testt@gpb.rru",
  "capacityPercent" : 130,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "eb7432d5-88ed-4245-a8a0-5594bd8cc9a4",
  "name" : "Трам парарам",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-10-16",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tram.pararam@tram.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "b019c4a7-dc53-4066-a55d-c7785ce826fc",
  "name" : "testresh5",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-25",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "testresh5@sfa.er",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "d98f8201-2016-49ad-8590-9de257cb3245",
  "name" : "testresh9",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-25",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "testresh9@fs.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "24e81011-00da-4ac0-a35c-129ac1323354",
  "name" : "testresh8",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-25",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "testresh8@sdf.er",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "5a8b904d-bb7b-4546-a5ff-ee008aed2ace",
  "name" : "testresh2",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-24",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "testresh2@a.rd",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "0b9ca36f-6176-49c4-8b45-185292425a68",
  "name" : "testresh3",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-24",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "testresh3@adf.re",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "855cc512-36f2-42a5-8538-acc2ac92121b",
  "name" : "testresh1",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-24",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "testresh1@a.e",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "d0cba27c-5bca-4051-8db3-b76acef0a847",
  "name" : "МП Курьер Кирилл DEV (НЕ ТРОГАТЬ)",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2020-01-13",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "lgs-kyle-courier",
  "email" : "lgs-kyle-courier@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "e216a0d6-b788-43bf-8675-6d62b7e86f41",
  "name" : "очереднойКурьер",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-12",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "hd@ftfugkjkg.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "94977d73-bbf5-4bcb-8cc4-72875327a531",
  "name" : "венди",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2020-06-04",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "lgs-wendy-operator@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "4a38f83f-72bd-4dc2-ba69-24bb87be4a51",
  "name" : "Александр",
  "status" : {
    "code" : "DELETED",
    "name" : "Удален"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2020-03-02",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "aleksandr.surnachev@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "84409b00-aa4b-4f31-b60e-23e93872ae00",
  "name" : "testresh4",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-24",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "testresh4",
  "email" : "testresh4@asdf.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "3123b1c1-a720-4eef-86bf-0511a4a23563",
  "name" : "testresh6",
  "status" : {
    "code" : "BLOCKED",
    "name" : "Блокирован"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-12-25",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "gpbutestresh",
  "email" : "testresh6@adf.re",
  "capacityPercent" : 120,
  "overCountInInterval" : 1,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "a90eb6e0-76e1-44c1-9c6d-2be804fe1f59",
  "name" : "Воротынцев Николай Николаевич",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2020-09-02",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "varatincev",
  "email" : "lgs-sally-courier@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "a291bf75-a39e-40ce-af07-eb0d88cfeafb",
  "name" : "Безымянный Московский Курьер",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-09-25",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "gpbu177761",
  "email" : "fd@tdth.kuy",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "d974b7e5-901e-4751-abea-f127f7d6f063",
  "name" : "WENDY Курьер МП",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2020-11-23",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "lgs-wendy-courier",
  "email" : "lgs-wendy-courier@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "45518f48-2e41-4ba1-8039-8429c6b90616",
  "name" : "МП Курьер TEST (НЕ ТРОГАТЬ)",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2019-11-22",
  "fromTime" : "10:00",
  "toTime" : "19:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "lgs-kenny-courier",
  "email" : "lgs-kenny-courier@gazprombank.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "9b47547a-233f-4ab8-a795-5da681084bfe",
  "name" : "test gpb Виталий1",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2021-12-03",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "test234234",
  "email" : "tewt@sdf.tu",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "d0faee2d-f577-443f-a266-70c47ff004ff",
  "name" : "asdf",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "77000000000000000000000",
  "branchId" : "7898",
  "startWork" : "2021-12-03",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : "asdf",
  "email" : "asdf@sdf.tu",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "c5505d25-2d2d-4894-9fb1-92e296ebbda9",
  "name" : "тест решафл питер 4",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "78000000000000000000000",
  "branchId" : "8012",
  "startWork" : "2020-02-16",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 2,
  "employer" : {
    "id" : 2,
    "name" : "Аутстаф"
  },
  "login" : null,
  "email" : "tet4@asdf.rus",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "aa412ec0-b4d0-4001-897f-18192a1e5925",
  "name" : "Питерский П.П.",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "78000000000000000000000",
  "branchId" : "8012",
  "startWork" : "2019-12-26",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "piter@mail.com",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "838602d1-b7a3-4651-a3a0-367b102cf205",
  "name" : "тест решафл питер 3",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "78000000000000000000000",
  "branchId" : "8012",
  "startWork" : "2020-02-16",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "tet@as1df.rus",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "07b3769a-e727-4669-8738-f7a646b31dc1",
  "name" : "тест решафл питер2",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "78000000000000000000000",
  "branchId" : "8012",
  "startWork" : "2019-09-19",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "квк1test@mail.ru",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "629cbc48-4285-48eb-a445-9d8213cb3574",
  "name" : "сургутский представитель первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "86000010000000000000000",
  "branchId" : "6861",
  "startWork" : "2020-11-06",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy12",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "ec01e628-ec8c-4cc4-8c6f-61320c091772",
  "name" : "новоуренгольский представитель первый",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "89000006000000000000000",
  "branchId" : "6896",
  "startWork" : "2020-09-28",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy27",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
}, {
  "id" : "594e1af6-42a3-49bd-b378-c3953a893b85",
  "name" : "новоуренгойский курьер второй",
  "status" : {
    "code" : "ACTIVE",
    "name" : "Активный"
  },
  "cityId" : "89000006000000000000000",
  "branchId" : "6896",
  "startWork" : "2020-09-28",
  "fromTime" : "08:00",
  "toTime" : "20:00",
  "employerId" : 1,
  "employer" : {
    "id" : 1,
    "name" : "Газпромбанк"
  },
  "login" : null,
  "email" : "fd@tdth.kuy4",
  "capacityPercent" : 100,
  "overCountInInterval" : 0,
  "updatedByService" : null,
  "updatedByUser" : null
} ]
