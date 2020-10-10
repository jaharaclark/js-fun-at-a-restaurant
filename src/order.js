function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
    deliveryOrders.push(order);
  };
};


function refundOrder(giveMoniesBack, deliveryOrders) {
  var newOrderArray = deliveryOrders.splice(giveMoniesBack - 1, 1);
  deliveryOrders = newOrderArray;

  // if (giveMoniesBack === deliveryOrders[0].orderNumber) {
  //   return deliveryOrders.shift();
  // };
};


function listItems(deliveryOrders) {
  var itemGroup = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemGroup.push(deliveryOrders[i].item);
  } return itemGroup.join(', ')
};


function searchOrder(deliveryOrders, foodName) {
  var itemPresent = false
  for (var i = 0; i <deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === foodName) {
        itemPresent = true
    };
  };
  return itemPresent
};


module.exports = {
 takeOrder,
 refundOrder,
 listItems,
 searchOrder
}
