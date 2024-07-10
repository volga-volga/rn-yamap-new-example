# Пример использования react-native-yamap

<img src="./demo/demo.gif" width=300/> 

- Рекомендуемые настройки
```
yarn: ~3
node: >=18
cocoapods: 1.15.2
```
- Установите зависимости

```sh
yarn install
cd ios
pod install
```

- Создайте файл app/examples/api_keys.ts с ключами для карт

```ts
export const MAP_KEY = 'КЛЮЧ ОТ КАРТ';
export const GEOCODER_KEY = 'КЛЮЧ ОТ ГЕОКОДЕРА';
```

- Можно запускать приложение
