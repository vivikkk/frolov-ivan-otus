## Варианты запросов

### Все телефоны со всеми полями
```
{
  items{
    id
    name
    price
    rating
    maker {
      id
      name
      country
    }
  }
}
```

### Все категории с телефонами, относящимся к ним
```
{
  categories {
    id
    items {
      id
      name
      price
      rating
    }
  }
}
```

### Категория Xiaomi(id: 2) — топ за свои деньги
```
{
  category(id: 2) {
    name
    items {
      name
    }
  }
}
```

### Телефон по id c производителем
```
{
  item(id: 2) {
    name
    maker {
      name
      country
    }
  }
}
```

### Добавление телефона
```
mutation ($name: String, $categoryId: ID, $price: Int) {
  addItem(name: $name, categoryId: $categoryId, price: $price) {
    name
    price
  }
}

query variables

{
  "name": "Galaxy A40 64GB",
  "categoryId": 1,
  "price": 13990
}
```
