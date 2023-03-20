## Enunciado

Se necesita realizar la simulación de una aplicación e-commerce que utilice un carrito de compras implementando algunas funcionalidades básicas.

Existen tres tipos de carritos, el común, el promocionable por fecha especial y el promocionable por usuario vip.

Cuando el usuario solicita crear un nuevo carrito la aplicación determina el carrito correspondiente y no se combinan las promociones. (Un carrito NO puede ser VIP y
Promocionable por fecha especial por ejemplo)

Se debe poder crear un carrito nuevo, eliminar un carrito, agregar y eliminar productos del carrito, y consultar el estado del carrito que nos daría el total a pagar.

No se debe implementar las formas de pagos, solo que se pueda visualizar los ítems del mismo. La idea es que exista algún parámetro en el sistema para poder simular la fecha. Si el cliente
no finalizó la compra, el carrito automáticamente se destruye. En el caso que haya completado la compra, debe quedar registrado. El cliente puede realizar varias compras en el
mismo día.

No es necesario desarrollar ningún tipo de ABM de los productos, las fechas promocionables, ni de los usuarios. Con solo tenerlos en la base de datos estaría bien.

Solo se necesitaría un frontend que pueda simular el envío de parámetros con la correcta visualización del funcionamiento de los request. Por ejemplo, agregar y eliminar cantidades de
productos, agregar y eliminar un producto, eliminar carrito, finalizar compra del carrito, consultar clientes VIP, clientes que pasaron a ser VIP en un determinado mes, clientes que
dejaron de ser VIP en un determinado mes.

Para calcular el valor del carrito se debe tener en cuenta:
Si se compran exactamente 4 productos:
- Se hace un descuento general del 25%.
Si se compran más de 10 productos:
- Si el carrito es común se hará un descuento de $100.
- Si el carrito es promocionable por fecha especial se hace un descuento general de $300.
- Si el carrito es vip, se bonifica el producto más barato y se hace un descuento general de
$500.
- Si el cliente en un determinado mes, realizó compras por más de $10.000, pasa a ser
considerado VIP en su próxima compra. (considerar el valor de lo que realmente paga el
cliente por los carritos luego de aplicarle los descuentos)
- Si el cliente en un determinado mes, no realizó compras, deja de ser VIP si lo era.



[Volver](https://github.com/SantiagoCastellaniDev/ExamenTecnico/blob/main/README.md)
