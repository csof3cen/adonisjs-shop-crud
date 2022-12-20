import Product from "App/Models/Product";
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class ProductsController {

  async index({view} : HttpContextContract){
    const products = await Product.all();

    return await view.render('home', {products: products });
  }

  async show({view, params} : HttpContextContract){
    const product = await Product.findOrFail(params.id);

    return await view.render('show', { product });
  }

  async destroy({params, response}: HttpContextContract){
    const product = await Product.findOrFail(params.id)
    product.delete()
    return response.redirect().toRoute('home')
  }

  async create({view}: HttpContextContract){
    return view.render('create')
  }

  async save({request, response}: HttpContextContract){
    const product = new Product();

    product.title = request.body()['title'];
    product.price = request.body()['price'];
    product.stock = request.body()['stock'];
    product.freeDeliver = request.body()['freeDeliver'] === 'on' ? true : false;
    product.shopName = request.body()['shopName'];

    await product.save();

    return response.redirect().toRoute('home');
  }
}
