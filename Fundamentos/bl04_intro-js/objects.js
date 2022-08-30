let singer = {
    name: 'Milton',
     lastName: 'Nascimento',
     nickName: 'Bituca',
     age: 77,
     bestAlbuns: ['travessia', 'clube da esquina', 'Minas'],
     bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
   }
 };

 console.log('o cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

 console.log('o cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

 singer['fullName'] = singer.name + ' ' + singer.lastName;

 console.log(singer);

  console.log('O cantor ' + singer.fullName + ' nasceu no Estado do ' + singer.bornInfo.state);