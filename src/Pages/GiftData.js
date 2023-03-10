const GiftData = [
    {
      id: 'gift-01',
      image: process.env.PUBLIC_URL+'/images/tam_gift01.jpg',
      desc: '샤워리바디워시&로션',
      vol: '240+235mL',
      title: '바디듀오 BIGALICO',
      note: '꿀처럼 진득하고 달콤한 카모마일과 씁쓸한 클라리세이지의 허브 향이 오묘한 조화를 이루어 중독성 있는 향을 선사합니다. 자칫 차갑게 느껴질 수 있는 촉촉한 이끼의 느낌을 우아하고 부드러운 나무결의 블론드 우드와 따뜻한 머스크로 감싸주어 당신의 지친 마음에 특별하고 작은 위안을 선물합니다.',
      price: 68000
    },
    {
      id: 'gift-02',
      image: process.env.PUBLIC_URL+'/images/tam_gift02.jpg',
      desc: '샌달우드|패츌리|흙내음',
      vol: '250mL',
      title: '퍼퓸드 핸드앤바디 워시 세트',
      note: '꿀처럼 진득하고 달콤한 카모마일과 씁쓸한 클라리세이지의 허브 향이 오묘한 조화를 이루어 중독성 있는 향을 선사합니다. 자칫 차갑게 느껴질 수 있는 촉촉한 이끼의 느낌을 우아하고 부드러운 나무결의 블론드 우드와 따뜻한 머스크로 감싸주어 당신의 지친 마음에 특별하고 작은 위안을 선물합니다.',
      price: 72000
    },
    {
      id: 'gift-03',
      image: process.env.PUBLIC_URL+'/images/tam_gift03.jpg',
      desc: '쇼핑백',
      vol: 'S',
      title: '쇼핑백',
      note: '지중해의 푸릇한 기운을 받고 자란 베르가못의 청량한 향에 라임 카다멈의 신선하고 쌉싸래한 향이 더해져 따사로운 햇볕 아래 서서히 익어가는 청귤을 떠오르게 합니다. 뒤이어 샌달우드가 그려내는 부드러운 곡선의 잔 향은 주위에 은은하게 머물며 햇살 가득한 여름날의 따뜻한 기억을 그려냅니다.',
      price: 1000
    },
    {
      id: 'gift-04',
      image: process.env.PUBLIC_URL+'/images/tam_gift04.jpg',
      desc: '쇼핑백',
      vol: 'M',
      title: '쇼핑백',
      note: '지중해의 푸릇한 기운을 받고 자란 베르가못의 청량한 향에 라임 카다멈의 신선하고 쌉싸래한 향이 더해져 따사로운 햇볕 아래 서서히 익어가는 청귤을 떠오르게 합니다. 뒤이어 샌달우드가 그려내는 부드러운 곡선의 잔 향은 주위에 은은하게 머물며 햇살 가득한 여름날의 따뜻한 기억을 그려냅니다.',
      price: 1500
    },
    {
      id: 'gift-05',
      image: process.env.PUBLIC_URL+'/images/tam_gift05.jpg',
      desc: '퍼퓸핸드 베스트 향',
      vol: '240+235mL',
      title: '퍼퓸핸드 미니 듀오 세트',
      note: '봄이 찾아와 겨울의 무거운 공기가 걷히고 따뜻한 노을이 하늘을 붉게 물들이는 듯한 머스크의 묵직한 향과 오렌지 껍질의 상큼한 향이 만나 경쾌한 무게감을 퍼트립니다. 달콤한 바닐라와 통카빈은 부드러운 향취를 더 하여 살결 위에 포근하고 기분 좋은 여운으로 오랜 시간 머무릅니다.',
      price: 33500
    },
    {
      id: 'gift-06',
      image: process.env.PUBLIC_URL+'/images/tam_gift06.jpg',
      desc: '샤워리바디워시&로션',
      vol: '240+235mL',
      title: '바디 듀오 FOG',
      note: '봄이 찾아와 겨울의 무거운 공기가 걷히고 따뜻한 노을이 하늘을 붉게 물들이는 듯한 머스크의 묵직한 향과 오렌지 껍질의 상큼한 향이 만나 경쾌한 무게감을 퍼트립니다. 달콤한 바닐라와 통카빈은 부드러운 향취를 더 하여 살결 위에 포근하고 기분 좋은 여운으로 오랜 시간 머무릅니다.',
      price: 68000
    },
    {
      id: 'gift-07',
      image: process.env.PUBLIC_URL+'/images/tam_gift07.jpg',
      desc: '한정 패키지',
      vol: '15mL*2',
      title: '퍼퓸핸드 미니 듀오 세트',
      note: '봄이 찾아와 겨울의 무거운 공기가 걷히고 따뜻한 노을이 하늘을 붉게 물들이는 듯한 머스크의 묵직한 향과 오렌지 껍질의 상큼한 향이 만나 경쾌한 무게감을 퍼트립니다. 달콤한 바닐라와 통카빈은 부드러운 향취를 더 하여 살결 위에 포근하고 기분 좋은 여운으로 오랜 시간 머무릅니다.',
      price: 33500
    },
    {
      id: 'gift-08',
      image: process.env.PUBLIC_URL+'/images/tam_gift08.jpg',
      desc: '캔들 세 가지 향',
      vol: '40g',
      title: '캔들 미니 트리오',
      note: '바이링거는 서로 다른 언어가 만나 새로운 의미로 확장되는 경험에서 영감을 얻었습니다. 오렌지 블로섬의 깨 끗하고 정돈된 플로럴 향이 마시멜로와 만나 폭신한 솜사탕이 되고, 이와 대비되는 씁쓸하고 레더리한 토바코 노트가 어우러지며 서로 독립적으로 존재하던 상반된 두 가지 향이 서로를 휘감듯 자리하며 낯선 조화의 향을 경험하게 합니다.',
      price: 85000
    },
    {
      id: 'gift-09',
      image: process.env.PUBLIC_URL+'/images/tam_gift09.jpg',
      desc: '손 소독제 세 가지 향',
      vol: '30mL*3',
      title: '손 소독제 트리오',
      note: '스웨이드에 겹겹이 감싸진 듯한 부드러운 배의 과육에서 느껴지는 시원한 향과 갈바넘의 쌉싸름한 조합이 스 웨이드 페어만의 독특한 트위스트를 보여줍니다. 미들 노트의 오랜 시간 정성을 들여 숙성시킨 위스키가 시간의 깊이를 더하고, 앰버 머스크의 묵직한 무게감으로 맺어줍니다.',
      price: 24500
    },
    {
      id: 'gift-10',
      image: process.env.PUBLIC_URL+'/images/tam_gift10.jpg',
      desc: '샌달우드|패츌리|흙내음',
      vol: '30mL*3',
      title: '손 소독제 트리오',
      note: '스웨이드에 겹겹이 감싸진 듯한 부드러운 배의 과육에서 느껴지는 시원한 향과 갈바넘의 쌉싸름한 조합이 스 웨이드 페어만의 독특한 트위스트를 보여줍니다. 미들 노트의 오랜 시간 정성을 들여 숙성시킨 위스키가 시간의 깊이를 더하고, 앰버 머스크의 묵직한 무게감으로 맺어줍니다.',
      price: 24500
    },
    {
      id: 'gift-11',
      image: process.env.PUBLIC_URL+'/images/tam_gift11.jpg',
      desc: '손 소독제+퍼퓸 핸드',
      vol: '470mL',
      title: '퍼퓸 핸드케어 미니 세트',
      note: '화이트 샴페인의 섬세한 거품과 달달한 과일향에 씁쓸한 다즐링 차 향이 풍성하고 조화롭게 어우러져 찻잔 속에서 추는 우아한 향의 춤의 향연을 선사합니다. 코 끝에서부터 전해지는 크리미한 머스크와 샌달우드가 부드러운 잔향을 오래도록 느끼게 해줍니다.',
      price: 26500
    },
    {
      id: 'gift-12',
      image: process.env.PUBLIC_URL+'/images/tam_gift12.jpg',
      desc: 'VEIN+000',
      vol: '15+40mL',
      title: '퍼퓸핸드 듀오',
      note: '봄이 찾아와 겨울의 무거운 공기가 걷히고 따뜻한 노을이 하늘을 붉게 물들이는 듯한 머스크의 묵직한 향과 오렌지 껍질의 상큼한 향이 만나 경쾌한 무게감을 퍼트립니다. 달콤한 바닐라와 통카빈은 부드러운 향취를 더 하여 살결 위에 포근하고 기분 좋은 여운으로 오랜 시간 머무릅니다.',
      price: 47500
    }
  ]
  
  export default GiftData
  
  