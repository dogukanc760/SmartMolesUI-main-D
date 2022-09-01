import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import NestedList from './GuideStep';
//material
import { Typography } from '@mui/material';
import { Label } from '@mui/icons-material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function Guide() {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Kurulum Ekranı Rehberi</h2>
      <br />
      <Typography style={{ textAlign: 'center' }} variant="body2" gutterBottom>
        <h4 style={{ textAlign: 'center' }}>SmartMoles Sistem Kurulum Rehberine Hoşgeldiniz. </h4><br />
         Biraz sonra başlayacağınız kurulum işlemlerinden önce lütfen aşağıda ki adımlara dair bilgileri lütfen gözden geçiriniz.
         (Adımların üstüne tıklanabilir menülerdir. Detaylı bilgiler içeriklerde yazmaktadır.) Her adımda ne yapılması gerektiği yazmaktadır.
         Adımlara harfiyen uyduğunuzda bir problem çıkmayacaktır. Kurulum esnasında hata olursa lütfen yazılım ekibine iletin. 
         <h5>Not: En sonunda kaydedilmeden çıkılan hiç bir kurulum kaydedilmez. </h5>
         <h5>Not-1: Kurulum bitmeden sayfayı kapatmayınız. </h5>
         <h5>Not-2: İsimlendirmeler ve parametre değerliklerine dikkat ediniz. </h5>
         <h5>Not-3: Bütün koordinat bilgilerini doğru girmeniz önemlidir. Gelecek harita modüllerinde bu bilgiler kullanılacaktır.</h5>
      </Typography>
      {/* <Typography variant="body2" gutterBottom>
        Curabitur pulvinar, dui sit amet facilisis dictum, diam sem bibendum sapien, quis finibus est dolor eget purus.
        Proin eu elit placerat, porta risus vitae, accumsan est. Maecenas ut pretium tortor. Sed quis ex sagittis,
        blandit mauris vel, pellentesque quam. Nulla ornare finibus erat at interdum. Quisque ut est nec diam laoreet
        convallis ac ac tellus. Donec venenatis ac orci at porttitor. Aliquam erat volutpat. Mauris commodo tellus a
        lorem fermentum, in finibus tortor porta. Mauris tincidunt a neque interdum pretium. Nunc commodo turpis tortor,
        a pulvinar ipsum molestie non. Etiam dapibus ultricies elit eget vestibulum.
      </Typography> */}
      <NestedList 
        children={'primary'}
        text={
          'İlk adımda herşeyden önce kullanıcıyı oluşturmalıyız. Eğer kullanıcı oluşturmazsak adım ilerlemeyecektir. Çünkü sonra ki bütün adımlar kullanıcı bazlı adımlardır.'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 1: Kullanıcı Oluşturma</h4>
      </NestedList>
      <NestedList
        children={'primary'}
        text={
          'İkinci Adımda eğer daha önce sözleşme tipi oluşturmamışsak veya yeni bir sözleşme tipi oluşturacaksak bu kısımda ki bilgileri dolduruyoruz. Eğer sözleşme tipine ihtiyacınız yoksa bu adımı atlayabilirsiniz.'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 2: Sözleşme Tipi Oluşturma</h4>
      </NestedList>
      <NestedList
        children={'primary'}
        text={
          'Üçüncü Adımda kullanıcı sözleşme girişi yapacağız. Bu adımda ki bilgilerin doğruluğu çok önemli. Bu adım atlanabilir ancak sözleşmesi olmayan kaydedilmiş kullanıcı sistemleri aktif olarak çalışmazlar.'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 3: Kullanıcı Sözleşme Girişi</h4>
      </NestedList>

      <NestedList
        children={'primary'}
        text={
          'Dördündü Adımda gateway bilgileri gireceğiz. Bu adım kesinlikle atlanamaz çünkü bundan sonra ki adımlar gateway bazlı adımlardır. Burada ki bilgi bütünlüğünde hata olursa sistem çalışmayacaktır.'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 4: Gateway Oluşturma</h4>
      </NestedList>

      <NestedList
        children={'primary'}
        text={
          'Beşinci Adımda gatewaye bağlı parseller oluşturulur. Her bir parsel bir kullanıcının tarlası, çalışma bölgesi gibi bilgileri ifade eder ve sulama grupları parsellerin altına bağlanır. Bu adım kesinlikle atlanamaz!'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 5: Parsel Oluşturma</h4>
      </NestedList>

      <NestedList
        children={'primary'}
        text={
          'Altıncı Adımda gateway üstüne takılacak olan simkart bilgisi gireriz. Bu adımda ki bilgiler hatalı olursa bağlantı sağlanamaz ve sistem çalışmaz. Bu adım kesinlikle atlanamaz! '
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 6: Simkart Girişi</h4>
      </NestedList>

      <NestedList
        children={'primary'}
        text={'Yedinci Adımda gateway için çalışacak simkart-modem imei numarasını kaydediyoruz. Bu adım atlanamaz!!!'}
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 7: Modem Imei Kayıtı</h4>
      </NestedList>
      <NestedList
        children={'primary'}
        text={
          'Sekizinci Adımda Sulama Grubu Oluştururuz. Sulama grupları önce parsele sonra gatewaye bağlı olarak çalışırlar. Pompa Kartı, Vana Kartı, KHAS Sensörü gibi bileşenler sulama grubunun altına geleceğinden bu adım kesinlikle atlanamaz!'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 8: Sulama Grubu Girişi</h4>
      </NestedList>
      <NestedList
        children={'primary'}
        text={
          'Dokuzuncu Adımda KHAS Sensör girişi yapıyoruz. Sensör girmek zorunlu değil atlanabilir ancak Pompa Kartı ve Vana Kartı girmek istiyorsak sensör girmek zorunludur!'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 9: Sensör Girişi</h4>
      </NestedList>
      <NestedList
        children={'primary'}
        text={
          'Onuncu Adımda Vana Kartı girişi yapıyoruz. Eğer bir önceki adımı atlamayıp bu adıma geldiysek vana kartı eklemek zorundayız. Bu adım atlama yapılamaz. Girilen oran ve parametre bilgileri önem arz etmekedir çünkü sistem tamamen buna göre çalışacaktır.'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 10: Vana Kartı Girişi</h4>
      </NestedList>

      <NestedList
        children={'primary'}
        text={
          'Onbirinci Adımda Pompa Kartı girişi yapıyoruz. Vana kartında olduğu gibi bu adıma geldiyseniz eklemek zorundasınız. Parametreler hayati önem taşıyor. Doğru girilmezse sistem hatalı çalışacaktır.'
        }
      >
        <RadioButtonCheckedIcon></RadioButtonCheckedIcon> <h4>Adım - 11: Pompa Kartı Girişi</h4>
      </NestedList>

 
    </>
  );
}
