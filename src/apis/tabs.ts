const tabs = [
    {
        "imageUrl": "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
        "selected": true,
        "title": "국립공원"
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
        "selected": false,
        "title": "통나무집",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
        "selected": false,
        "title": "섬",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg",
        "selected": false,
        "title": "캠핑카",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
        "selected": false,
        "title": "돔하우스",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
        "selected": false,
        "title": "기상천외한 숙소",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
        "selected": false,
        "title": "해변 근처",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
        "selected": false,
        "title": "초소형 주택",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
        "selected": false,
        "title": "디자인",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
        "selected": false,
        "title": "A자형 주택",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
        "selected": false,
        "title": "호숫가",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
        "selected": false,
        "title": "북극",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
        "selected": false,
        "title": "멋진 수영장",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
        "selected": false,
        "title": "동굴",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
        "selected": false,
        "title": "서핑",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        "selected": false,
        "title": "최고의 전망",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
        "selected": false,
        "title": "복토 주택",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
        "selected": false,
        "title": "열대 지역",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
        "selected": false,
        "title": "B&B",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
        "selected": false,
        "title": "Luxe",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg",
        "selected": false,
        "title": "셰어하우스",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
        "selected": false,
        "title": "캐슬",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
        "selected": false,
        "title": "농장",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
        "selected": false,
        "title": "한적한 시골",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
        "selected": false,
        "title": "저택",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
        "selected": false,
        "title": "상징적 도시",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
        "selected": false,
        "title": "해변 바로 앞",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
        "selected": false,
        "title": "골프장",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
        "selected": false,
        "title": "유서 깊은 주택",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
        "selected": false,
        "title": "캠핑장",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg",
        "selected": false,
        "title": "키클라데스 주택",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
        "selected": false,
        "title": "풍차",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
        "selected": false,
        "title": "와인 농장",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
        "selected": false,
        "title": "전문가급 주방",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
        "selected": false,
        "title": "보트",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
        "selected": false,
        "title": "스키",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
        "selected": false,
        "title": "료칸",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg",
        "selected": false,
        "title": "컨테이너하우스",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
        "selected": false,
        "title": "마차",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
        "selected": false,
        "title": "창작 공간",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg",
        "selected": false,
        "title": "카사 파르티쿨라르",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
        "selected": false,
        "title": "트리하우스",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg",
        "selected": false,
        "title": "민수",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
        "selected": false,
        "title": "헛간",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
        "selected": false,
        "title": "사막",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
        "selected": false,
        "title": "유르트",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
        "selected": false,
        "title": "타워",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
        "selected": false,
        "title": "하우스보트",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
        "selected": false,
        "title": "속세를 벗어난 숙소",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg",
        "selected": false,
        "title": "그랜드 피아노",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
        "selected": false,
        "title": "리아드",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg",
        "selected": false,
        "title": "트룰로",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg",
        "selected": false,
        "title": "담무소",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
        "selected": false,
        "title": "스키를 탄 채로 출입 가능",
    },
    {
        "imageUrl": "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
        "selected": false,
        "title": "호수 근처",
    }
]


export default tabs;