const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
	res.send([
		{
			id: 1,
			image: 'images/iphone.jpg',
			name: '아이폰',
			price: 20000,
			gender: '남자',
			job: '대학생',
		},
		{
			id: 2,
			image: 'images/airpod.jpg',
			name: '에어팟',
			price: 1000001,
			gender: '여자',
			job: '프로그래머',
		},
		{
			id: 3,
			image: 'images/port.jpg',
			name: '전기포트',
			price: 2000000,
			gender: '남자',
			job: '디자이너',
		},
	]);
});

app.get('/api/package', (req, res) => {
	res.send([
		{
			id: 1,
			image: 'https://placeimg.com/64/64/1',
			name: '아이폰',
			description: '가치있는 고철덩어리',
			price: 1000,
			person: '박범진'
		},
		{
			id: 2,
			image: 'https://placeimg.com/64/64/2',
			name: '벽돌',
			description: '동그라미가 있는 네모',
			price: 1000,
			person: '범진박'
		},
		{
			id: 3,
			image: 'https://placeimg.com/64/64/3',
			name: '군번줄',
			description: '던지면 부서지는거',
			price: 1000,
			person: '박커톤'
		},
		{
			id: 4,
			image: 'https://placeimg.com/64/64/4',
			name: '크런치',
			description: '손만한 크기',
			price: 1000,
			person: '박준규'
		},
		{
			id: 5,
			image: 'https://placeimg.com/64/64/5',
			name: '비닐봉지',
			description: '바람불면 날라가는거',
			price: 1000,
			person: '힙커톤'
		},
	]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));