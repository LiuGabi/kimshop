Page({
	data: {
		imgUrls: [
			'https://img3.doubanio.com/img/files/file-1508395894-0.jpg',
			'https://img3.doubanio.com/img/files/file-1516604657-1.jpg',
			'https://img3.doubanio.com/img/files/file-1510730774-0.jpg',
			'https://img3.doubanio.com/img/files/file-1517992191-0.jpg',
			'https://img3.doubanio.com/img/files/file-1517475464-0.jpg'
		],
		list: [{
			title: '#生成你的2018专属电影#',
			content: '点击输入对你有意义的日子，看看那天属于你的电影是哪一部吧！',
			img: 'https://img3.doubanio.com/img/files/file-1517992833-0.jpg'
		}, {
			title: '#晒出你的2018豆瓣日历#',
			content: '它是否已和你共同开启新年的电影旅程了呢？',
			img: 'https://img3.doubanio.com/img/files/file-1515387415-1.jpg'
		}, {
			title: '#光阴带走的，电影留给你#',
			content: '年末将至，豆瓣为你捎来一封手写信。',
			img: 'https://img3.doubanio.com/img/files/file-1513591841-1.jpg'
		}]
	},
	imageLoad: function (e) {  
		var res = wx.getSystemInfoSync();  
		var imgwidth = e.detail.width,  
			imgheight = e.detail.height,      
			ratio = imgwidth / imgheight;  
			this.setData({ bannerHeight: res.windowWidth / ratio });
	}
})