const SHOP_DATA = {
  micro: {
  id: 1,
  title: 'micro',
  routeName: 'micro',
  items: [
    {
      id: 1,
      name: 'Tata Punch',
      imageUrl: 'https://images.unsplash.com/photo-1612694303197-6c7c56cda3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 25
    },
    {
      id: 2,
      name: 'VW Vintage',
      imageUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
      price: 18
    },
    {
      id: 3,
      name: 'KIA E',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/04/09/22/07/car-3305699_960_720.jpg',
      price: 35
    },
    {
      id: 4,
      name: 'Ford Fista',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/08/01/16/58/ford-3577591_960_720.jpg',
      price: 25
    },
    {
      id: 5,
      name: 'Fiat POLO',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/07/09/13/06/fiat-837865_960_720.jpg',
      price: 18
    },
    {
      id: 6,
      name: 'Hundai I20',
      imageUrl: 'https://images.unsplash.com/photo-1571561944842-542037875b50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 14
    },
    {
      id: 7,
      name: 'Toyota SM24',
      imageUrl: 'https://images.unsplash.com/photo-1589539027938-35266cbbf280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      price: 18
    },
    {
      id: 8,
      name: 'KIA',
      imageUrl: 'https://images.unsplash.com/photo-1592805723127-004b174a1798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 14
    },
    {
      id: 9,
      name: 'VW Polo',
      imageUrl: 'https://images.unsplash.com/photo-1581528247930-c8e45b9da31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 16
    }
  ]
},
sedan: {
  id: 2,
  title: 'Sedan',
  routeName: 'sedan',
  items: [
    {
      id: 10,
      name: 'Honda City',
      imageUrl: 'https://images.unsplash.com/photo-1619485029177-28ce04ffbbfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80',
      price: 220
    },
    {
      id: 11,
      name: 'Hundai Verna',
      imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      price: 280
    },
    {
      id: 12,
      name: 'Toyota etios',
      imageUrl: 'https://images.unsplash.com/photo-1563689482688-80e2c2bd7223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80',
      price: 110
    },
    {
      id: 13,
      name: 'VW GTI',
      imageUrl: 'https://images.unsplash.com/photo-1605475300127-0a31e8273bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1507&q=80',
      price: 160
    },
    {
      id: 14,
      name: 'Cobalt SS',
      imageUrl: 'https://images.unsplash.com/photo-1617364064504-906d71d46357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      price: 160
    },
    {
      id: 15,
      name: 'Honda IvTech',
      imageUrl: 'https://images.unsplash.com/photo-1588940485430-c85551234ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      price: 160
    },
    {
      id: 16,
      name: 'Mercedes CLK',
      imageUrl: 'https://images.unsplash.com/photo-1618329214699-42303d409145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      price: 190
    },
    {
      id: 17,
      name: 'Honda Civic',
      imageUrl: 'https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      price: 200
    }
  ]
},
suv: {
  id: 3,
  title: 'SUV',
  routeName: 'suv',
  items: [
    {
      id: 18,
      name: 'Jeep Compass',
      imageUrl: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80',
      price: 125
    },
    {
      id: 19,
      name: 'Ford Raptor',
      imageUrl: 'https://images.unsplash.com/photo-1612057473166-af2affdb92ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      price: 90
    },
    {
      id: 20,
      name: 'Range Rover',
      imageUrl: 'https://images.unsplash.com/photo-1563720223489-bb7691336194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 90
    },
    {
      id: 21,
      name: 'Jeep Armada',
      imageUrl: 'https://images.unsplash.com/photo-1621695644555-5fe0f2f87939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      price: 165
    },
    {
      id: 22,
      name: 'Range Rover Defender',
      imageUrl: 'https://images.unsplash.com/photo-1612563893490-d86ed296e5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      price: 185
    }
  ]
},
sportz: {
  id: 4,
  title: 'Sportz',
  routeName: 'sportz',
  items: [
    {
      id: 23,
      name: 'Nissan',
      imageUrl: 'https://images.unsplash.com/photo-1595558883521-062b300985e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 25
    },
    {
      id: 24,
      name: 'Lamborgini Huracan',
      imageUrl: 'https://images.unsplash.com/photo-1578656415093-e7e19e5e132b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80',
      price: 20
    },
    {
      id: 25,
      name: 'Alpha Romeo',
      imageUrl: 'https://images.unsplash.com/photo-1560361586-8242b1fc06c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1027&q=80',
      price: 80
    },
    {
      id: 26,
      name: 'Audi R5',
      imageUrl: 'https://images.unsplash.com/photo-1612956946912-b2d8e5fd65a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
      price: 80
    },
    {
      id: 27,
      name: 'McLaren P8',
      imageUrl: 'https://images.unsplash.com/photo-1616451596297-675af5ccef8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 45
    },
    {
      id: 28,
      name: 'Porshe Cayenne',
      imageUrl: 'https://images.unsplash.com/photo-1522325901921-e199d3eaa5ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80',
      price: 135
    },
    {
      id: 29,
      name: 'BMW S4',
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 20
    }
  ]
},
luxury: {
  id: 5,
  title: 'Luxury',
  routeName: 'luxury',
  items: [
    {
      id: 30,
      name: 'Lamborgiini',
      imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80',
      price: 325
    },
    {
      id: 31,
      name: 'Ferrari',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 20
    },
    {
      id: 32,
      name: 'Mercedes',
      imageUrl: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80',
      price: 25
    },
    {
      id: 33,
      name: 'Cardillac',
      imageUrl: 'https://images.unsplash.com/photo-1592186383436-5eaa625b59d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      price: 25
    },
    {
      id: 34,
      name: 'Audi R8',
      imageUrl: 'https://images.unsplash.com/photo-1610399214658-52b9fdea4627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 40
    },
    {
      id: 35,
      name: 'Chevrolet Camaro',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: 25
    }
  ]
}


}

export default SHOP_DATA
