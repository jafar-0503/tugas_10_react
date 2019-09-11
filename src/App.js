import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Flag, Icon, Input,
  Image, Header, Divider, Label, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return(
      <div>
      <br />
      <Grid container columns={3}>
        <Grid.Column width={3}>
          <Flag name='id' size='big' />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon textAlign='right' name='angle left' size='large' />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon textAlign='right' name='angle right' size='large' />
        </Grid.Column>

        <Grid.Column  width={10}>
          <Input fluid icon='star' placeholder='Search...' />
        </Grid.Column>

        <Grid.Column width={3}>
          <Header as='h3' color='red'>
            <Image className='ui avatar image' src='https://react.semantic-ui.com/images/avatar/large/patrick.png'
              size='small' />Mukhamat Jafar
          </Header>
        </Grid.Column>
      </Grid>
      <br />

      <Divider horizontal><h2>Selamat Datang !!!</h2></Divider>

      <Grid container columns={3}>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={11}></Grid.Column>
        <Grid.Column width={2}>
          <Label as='a' color='teal' tag>SPORT</Label>
        </Grid.Column>
      </Grid>
      <br /><br />


        <Container textAlign='center'>
          <p>
          JENEWA - Hari ini, Selasa (26/3), Hakim Pengadilan Banding FIM rencananya bakal membacakan putusan terkait perangkat yang digunakan pembalap tim Ducati yakni Andrea Dovizioso dan Danilo Petrucci pada Desmosedici GP19 selama menjalani balapan seri pertama MotoGP di Grand Prix Qatar. Sebelum mengetahui apakah Ducati memenangkan gugatan empat tim (Aprilia, KTM, Suzuki, dan Honda) atau tidak?  GPOne menganalisis dari tiga potensi yang bakal dibacakan hakim pada putusan sidang nanti. Salah satunya membahas mengenai kemenangan Dovizioso di Sirkuit Losail. Ini sangat menarik mengingat dua dari empat tim yang melakukan gugatan ke Pengadilan Banding FIM diduga ingin mencabut kemenangan Dovizioso di Losail. Itu sebagaimana disampaikan Massimo Rivola selaku Direktur Balap Aprilia Racing. Rivola menekankan bahwa pihaknya tidak pernah menuntut kemenangan Andrea Dovizioso pada seri perdana MotoGP di Grand Prix Qatar dibatalkan. Pernyataan itu disampaikannya jelang bacaan putusan Pengadilan Banding FIM terkait penggunaan siyap belakang pada motor Desmosedici GP19. "Kami tidak pernah menuntut agar kemenangan Dovizioso dibatalkan, setidaknya bukan kami dan Suzuki," kata Rivola. Direktur Olaharaga Ducati, Paolo Ciabatti, mengatakan bahwa timnya tenang dan sabar menanti keputusan Sidang Banding FIM. Kemenangan pembalap Ducati, Andrea Dovizioso, di MotoGP Qatar akhir pekan kemarin menjadi bahan pergunjingan setelah ia disinyalir menggunakan winglet ilegal di Sirkuit Losail. Para steward perlombaan memastikan bahwa tak ada pelanggaran regulasi yang dilakukan Ducati sehingga kemenangan Dovizioso disahkan. Selain Dovi, hasil finis peringkat keenam sesama rider Ducati, Danilo Petrucci, dan pembalap tim satelit mereka Pramac, Jack Miller, juga dipertahankan.
          </p>
        </Container>
        <br /><br />

        <Container textAlign='center'>
          <Button size='big' color='teal'>
            <Icon name='plus' />Tambah Tautan Ke List
          </Button>
        </Container>

      </div>

    )
  }
}

export default App;
