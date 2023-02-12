const nameField = document.getElementById('nameField');
const telephone = document.getElementById('telephone');
const address = document.getElementById('address');
const nameLabel = document.getElementById('lbl1')
const telephoneLabel = document.getElementById('lbl2')
const addressLabel = document.getElementById('lbl3')

function saveButtonClicked() {
   console.log(nameField.value);
   console.log(telephone.value);
   console.log(address.value);

   nameLabel.innerText+=` ${nameField.value}`;
   telephoneLabel.innerText+=` ${telephone.value}`;
   addressLabel.innerText+=` ${address.value}`;

}