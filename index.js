
Culqi.publicKey = 'pk_test_09431565900514af';
Culqi.settings({
  title: 'Culqi',
  currency: 'PEN',
  description: 'Polo/remera Culqi lover',
  amount: 3500
});

const btnPago = document.getElementById('btn-pago');

btnPago.addEventListener('click', (e) => { 
  Culqi.open();
  e.preventDefault();
  console.log('click');
});

function culqi() {
  console.log('culqi...aqui toy!');
  if (Culqi.token) {  // ¡Objeto Token creado exitosamente!
    const token = Culqi.token.id;
    console.log('Se ha creado un Token: ', token);
    //pay success
    Culqi.close();



    //En esta linea de codigo debemos enviar el "Culqi.token.id"
    //hacia tu servidor con Ajax
  } else if (Culqi.order) {  // ¡Objeto Order creado exitosamente!
    const order = Culqi.order;
    console.log('Se ha creado el objeto Order: ', order);
    
  } else {
    // Mostramos JSON de objeto error en consola
    console.log('Error : ',Culqi.error);
  }
};