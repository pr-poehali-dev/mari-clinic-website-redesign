import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { icon: 'Stethoscope', title: 'Терапия', description: 'Диагностика и лечение общих заболеваний' },
    { icon: 'Heart', title: 'Кардиология', description: 'Заболевания сердечно-сосудистой системы' },
    { icon: 'Brain', title: 'Неврология', description: 'Диагностика и лечение нервной системы' },
    { icon: 'Baby', title: 'Педиатрия', description: 'Медицинская помощь детям' },
    { icon: 'Eye', title: 'Офтальмология', description: 'Лечение заболеваний глаз' },
    { icon: 'Bone', title: 'Ортопедия', description: 'Заболевания опорно-двигательного аппарата' },
  ];

  const doctors = [
    {
      name: 'Иванова Мария Сергеевна',
      specialty: 'Терапевт',
      experience: '15 лет',
      image: '/placeholder.svg',
    },
    {
      name: 'Петров Дмитрий Александрович',
      specialty: 'Кардиолог',
      experience: '12 лет',
      image: '/placeholder.svg',
    },
    {
      name: 'Смирнова Елена Викторовна',
      specialty: 'Невролог',
      experience: '18 лет',
      image: '/placeholder.svg',
    },
  ];

  const reviews = [
    {
      name: 'Анна К.',
      rating: 5,
      text: 'Отличная клиника! Профессиональные врачи, современное оборудование. Особенно благодарна доктору Ивановой за внимательное отношение.',
      date: '15.10.2024',
    },
    {
      name: 'Сергей М.',
      rating: 5,
      text: 'Обратился с проблемами сердца. Доктор Петров провел полное обследование и назначил эффективное лечение. Рекомендую!',
      date: '10.10.2024',
    },
    {
      name: 'Ольга В.',
      rating: 5,
      text: 'Хожу в эту клинику всей семьей. Удобная запись онлайн, приветливый персонал, чистота и комфорт.',
      date: '05.10.2024',
    },
  ];

  const priceList = [
    { category: 'Терапия', services: [
      { name: 'Первичный прием', price: '2000' },
      { name: 'Повторный прием', price: '1500' },
    ]},
    { category: 'Кардиология', services: [
      { name: 'Консультация кардиолога', price: '3000' },
      { name: 'ЭКГ', price: '1200' },
    ]},
    { category: 'Неврология', services: [
      { name: 'Консультация невролога', price: '2800' },
      { name: 'Электроэнцефалография', price: '2500' },
    ]},
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-gray-900">МариКлиник</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#doctors" className="text-gray-600 hover:text-primary transition-colors">
                Врачи
              </a>
              <a href="#prices" className="text-gray-600 hover:text-primary transition-colors">
                Прайс
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                Контакты
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Записаться онлайн</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Онлайн-запись на прием</DialogTitle>
                    <DialogDescription>
                      Заполните форму и мы свяжемся с вами для подтверждения записи
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor">Выберите специалиста</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите врача" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ivanova">Иванова М.С. - Терапевт</SelectItem>
                          <SelectItem value="petrov">Петров Д.А. - Кардиолог</SelectItem>
                          <SelectItem value="smirnova">Смирнова Е.В. - Невролог</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Желаемая дата</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comment">Комментарий</Label>
                      <Textarea id="comment" placeholder="Опишите ваши жалобы" />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <a href="#services" className="block text-gray-600 hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#doctors" className="block text-gray-600 hover:text-primary transition-colors">
                Врачи
              </a>
              <a href="#prices" className="block text-gray-600 hover:text-primary transition-colors">
                Прайс
              </a>
              <a href="#reviews" className="block text-gray-600 hover:text-primary transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="block text-gray-600 hover:text-primary transition-colors">
                Контакты
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Записаться онлайн</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Онлайн-запись на прием</DialogTitle>
                    <DialogDescription>
                      Заполните форму и мы свяжемся с вами для подтверждения записи
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name-mobile">Ваше имя</Label>
                      <Input id="name-mobile" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-mobile">Телефон</Label>
                      <Input id="phone-mobile" type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-mobile">Выберите специалиста</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите врача" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ivanova">Иванова М.С. - Терапевт</SelectItem>
                          <SelectItem value="petrov">Петров Д.А. - Кардиолог</SelectItem>
                          <SelectItem value="smirnova">Смирнова Е.В. - Невролог</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-mobile">Желаемая дата</Label>
                      <Input id="date-mobile" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comment-mobile">Комментарий</Label>
                      <Textarea id="comment-mobile" placeholder="Опишите ваши жалобы" />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </nav>
      </header>

      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Ваше здоровье —<br />наша забота
              </h1>
              <p className="text-xl text-gray-600">
                Современная медицинская клиника с опытными врачами и новейшим оборудованием
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="text-lg px-8">
                      Записаться на прием
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Онлайн-запись на прием</DialogTitle>
                      <DialogDescription>
                        Заполните форму и мы свяжемся с вами для подтверждения записи
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name-hero">Ваше имя</Label>
                        <Input id="name-hero" placeholder="Иван Иванов" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone-hero">Телефон</Label>
                        <Input id="phone-hero" type="tel" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="doctor-hero">Выберите специалиста</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите врача" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ivanova">Иванова М.С. - Терапевт</SelectItem>
                            <SelectItem value="petrov">Петров Д.А. - Кардиолог</SelectItem>
                            <SelectItem value="smirnova">Смирнова Е.В. - Невролог</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date-hero">Желаемая дата</Label>
                        <Input id="date-hero" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comment-hero">Комментарий</Label>
                        <Textarea id="comment-hero" placeholder="Опишите ваши жалобы" />
                      </div>
                      <Button className="w-full">Отправить заявку</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (495) 123-45-67
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-gray-600">специалистов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-gray-600">пациентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="/placeholder.svg"
                alt="Медицинская клиника"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр медицинских услуг</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0">
                    Подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши врачи</h2>
            <p className="text-xl text-gray-600">Опытные специалисты с высокой квалификацией</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-lg">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                    <Icon name="Award" size={20} />
                    <span>Стаж: {doctor.experience}</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Записаться на прием
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Запись к врачу: {doctor.name}</DialogTitle>
                        <DialogDescription>
                          Заполните форму для записи к специалисту
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Ваше имя</Label>
                          <Input placeholder="Иван Иванов" />
                        </div>
                        <div className="space-y-2">
                          <Label>Телефон</Label>
                          <Input type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div className="space-y-2">
                          <Label>Желаемая дата</Label>
                          <Input type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label>Комментарий</Label>
                          <Textarea placeholder="Опишите ваши жалобы" />
                        </div>
                        <Button className="w-full">Отправить заявку</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <p className="text-xl text-gray-600">Прозрачные цены на все услуги</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {priceList.map((category, idx) => (
                  <TabsTrigger key={idx} value={idx.toString()}>
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {priceList.map((category, idx) => (
                <TabsContent key={idx} value={idx.toString()}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.services.map((service, sIdx) => (
                          <div key={sIdx} className="flex justify-between items-center pb-4 border-b last:border-0">
                            <span className="text-gray-700">{service.name}</span>
                            <span className="text-xl font-semibold text-primary">{service.price} ₽</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы пациентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши пациенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-gray-500">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Мы всегда рады вам помочь</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (495) 123-45-68</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@mari-clinic.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 8:00 - 20:00</p>
                  <p className="text-gray-600">Сб-Вс: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea id="contact-message" placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" className="text-primary" size={28} />
                <span className="text-xl font-bold">МариКлиник</span>
              </div>
              <p className="text-gray-400">
                Современная медицинская клиника с заботой о вашем здоровье
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#doctors" className="hover:text-primary transition-colors">Врачи</a></li>
                <li><a href="#prices" className="hover:text-primary transition-colors">Прайс</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Терапия</li>
                <li>Кардиология</li>
                <li>Неврология</li>
                <li>Педиатрия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>г. Москва, ул. Примерная, д. 123</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@mari-clinic.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МариКлиник. Все права защищены. Лицензия № ЛО-77-01-012345</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
