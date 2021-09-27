import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee-dto';
import { Coffee } from './entities/coffee.enity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwerk Roast',
      brand: 'Bubby Brew',
      flavors: ['vanilla, chocolate'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find(
      (coffee: Coffee) => coffee.id === Number(id),
    );
    if (!coffee) {
      throw new NotFoundException(`coffe with ${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
    }
  }

  remove(id: string) {
    const coffeIndex = this.coffees.findIndex(
      (coffee) => coffee.id === Number(id),
    );
    if (coffeIndex >= 0) {
      this.coffees.splice(coffeIndex, 1);
    }
  }
}
