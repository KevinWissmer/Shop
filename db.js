let db = [

    [
        {
            'name': 'Paradise Pizza',
            'min_price': '11,00€',
            'delivery_costs': '2,00€',
            'delivery_costs_max': '50,00€',
            'information': 'coming soon',
            'logo_path': './img/Paradise Pizza.png',
            'main_img_path': './img/bg_pizza.jpg',
            'categories': ['Hauptgericht','Beilage','Getränke'],
            'rating': {
                'rating_value': '47',
                'rating_number': '2135'
            }
        },
        [
            {
                'name': 'Pizza Krabben',
                'category': 'Hauptgericht',
                'description': 'mit Krabben und Peperoni',
                'basic_price': '8,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Ananas, mit Champignons, mit Ei, mit Gewürzen, scharf, mit Käse im Rand und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein, 20cm',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Mittel, 25cm',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß, 30cm',
                        'price': '5,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ananas',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Hackfleisch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Spaghetti',
                        'price': '1,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ei',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'Käse im Rand',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Pizza Margherita',
                'category': 'Hauptgericht',
                'description': '',
                'basic_price': '6,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Ananas, mit Champignons, mit Ei, mit Gewürzen, scharf, mit Käse im Rand und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein, 20cm',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Mittel, 25cm',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß, 20cm',
                        'price': '5,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ananas',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Hackfleisch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Spaghetti',
                        'price': '1,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ei',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'Käse im Rand',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Pizza Diavolo (scharf)',
                'category': 'Hauptgericht',
                'description': 'mit Salami, Zwiebeln, Peperoni und Knoblauch',
                'basic_price': '8,00€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Ananas, mit Champignons, mit Ei, mit Gewürzen, scharf, mit Käse im Rand und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein, 20cm',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Mittel, 25cm',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß, 20cm',
                        'price': '5,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ananas',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Hackfleisch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Spaghetti',
                        'price': '1,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ei',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'Käse im Rand',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Wasser aus Italien',
                'category': 'Getränke',
                'description': 'mit Kohlensäure',
                'basic_price': '2,50€',
                'productinfo': 'soon to be added',
                'addon_description': '',
                'addon_categories': [{ 'name': 'Menge', 'description': 'Wählen Sie eine Menge:' }],
                'addons': [
                    {
                        'category': 'Menge',
                        'name': '1 Stück',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Menge',
                        'name': '6 Stück',
                        'price': '10,00€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Pizzabrötchen',
                'category': 'Beilage',
                'description': 'mit Käse und Knoblauch',
                'basic_price': '4,50€',
                'productinfo': 'soon to be added',
                'addon_description': '',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': '6 Stück',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': '9 Stück',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    }
                ]
            }
        ]
    ],
    [
        {
            'name': 'Paradise Döner',
            'min_price': '8,00€',
            'delivery_costs': '1,50€',
            'delivery_costs_max': '30,00€',
            'information': 'coming soon',
            'logo_path': './img/Paradise Döner.png',
            'main_img_path': './img/bg_doener.jpg',
            'categories': ['Hauptgericht','Salat','Kleinigkeiten'],
            'rating': {
                'rating_value': '89',
                'rating_number': '198'
            }
        },
        [
            {
                'name': 'Kebab Teller',
                'category': 'Hauptgericht',
                'description': 'mit gegrilltem Truthahnfleisch, Salat und Pommes',
                'basic_price': '8,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: diverse Soßen, mit Knoblauch, mit Champignons, mit Gewürzen (scharf), mit Käse überbacken und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Soße', 'description': 'Ihre Soße:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '3,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Oliven',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'mit Käse überbacken',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'mit extra Currysoße',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'mit extra Mayonaise',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Döner Kebab',
                'category': 'Hauptgericht',
                'description': 'mit gegrilltem Truthahnfleisch und Fladenbrot',
                'basic_price': '4,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Ananas, mit Champignons, mit Ei, mit Gewürzen, scharf, mit Käse im Rand und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '3,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Oliven',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'mit Käse überbacken',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Döner Kebab (vegetarisch)',
                'category': 'Hauptgericht',
                'description': 'mit Falafeln',
                'basic_price': '7,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Knoblauch, mit Champignons, mit Gewürzen (scharf), mit Käse überbacken und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '3,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Oliven',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'mit Käse überbacken',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Salat (vegetarisch)',
                'category': 'Salat',
                'description': 'mit Tomate, Gurke und Karotte',
                'basic_price': '5,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus verschiedenen Dressings.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Dressing', 'description': 'Ihr Dressing:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '3,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Dressing',
                        'name': 'Sylter',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Dressing',
                        'name': 'Öl und Essig',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Pommes',
                'category': 'Kleinigkeiten',
                'description': '',
                'basic_price': '2,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: Rot, Weiß oder Rotweiß.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Soße', 'description': 'Ihre Soße:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '1,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'Ketchup',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'Mayonaise',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Käsesticks',
                'category': 'Kleinigkeiten',
                'description': '',
                'basic_price': '1,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: Rot, Weiß oder Rotweiß.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Soße', 'description': 'Ihre Soße:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': '4 Stück',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': '10 Stück',
                        'price': '3,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'Ketchup',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'Mayonaise',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            }
        ]
    ],
    [
        {
            'name': 'Paradise Noodles',
            'min_price': '9,00€',
            'delivery_costs': '0,00€',
            'delivery_costs_max': '15,00€',
            'information': 'coming soon',
            'logo_path': './img/Paradise Noodles.png',
            'main_img_path': './img/bg_noodles.jpg',
            'categories': ['Hauptgericht','Beilage'],
            'rating': {
                'rating_value': '30',
                'rating_number': '121'
            }
        },
        [
            {
                'name': 'Nudelbox',
                'category': 'Hauptgericht',
                'description': 'mit gegrilltem Gemüse',
                'basic_price': '5,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: diverse Soßen, mit Knoblauch, mit Gewürzen (scharf), mit Käse überbacken und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Fleisch', 'description': 'Ihre Zutat:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Hähnchen',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Ente',
                        'price': '3,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Rind',
                        'price': '4,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'extra scharf',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Süßsauer-Soße',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Maggiersatz',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Chop-Suey',
                'category': 'Hauptgericht',
                'description': 'mit gegrilltem Reis und gegrilltem Gemüse',
                'basic_price': '8,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: diverse Soßen und Fleischsorten, mit Knoblauch, mit Gewürzen (scharf) und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Fleisch', 'description': 'Ihre Zutat:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Hähnchen',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Ente',
                        'price': '3,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Rind',
                        'price': '4,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'extra scharf',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Süßsauer-Soße',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Maggiersatz',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Sze-Chuan',
                'category': 'Hauptgericht',
                'description': 'mit Gemüse und Cashewnüssen',
                'basic_price': '6,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: diverse Soßen und Fleischsorten, mit Knoblauch, mit Gewürzen (scharf) und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Fleisch', 'description': 'Ihre Zutat:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Hähnchen',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Ente',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Rind',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'extra scharf',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit doppelter Sze-Chuan-Soße',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Maggiersatz',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Chicken Nuggets',
                'category': 'Beilage',
                'description': 'mit Süß-Sauer-Soße',
                'basic_price': '4,50€',
                'productinfo': 'soon to be added',
                'addon_description': '',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': '6 Stück',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': '9 Stück',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    }
                ]
            }
        ]
    ],
    [
        {
            'name': 'Pizza from Paradise',
            'min_price': '13,00€',
            'delivery_costs': '0,00€',
            'delivery_costs_max': '25,00€',
            'information': 'coming soon',
            'logo_path': './img/Paradise Pizza.png',
            'main_img_path': './img/bg_pizza.jpg',
            'categories': ['Hauptgericht','Beilage','Getränke'],
            'rating': {
                'rating_value': '84',
                'rating_number': '66115'
            }
        },
        [
            {
                'name': 'Pizza Krabben',
                'category': 'Hauptgericht',
                'description': 'mit Krabben und Peperoni',
                'basic_price': '8,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Ananas, mit Champignons, mit Ei, mit Gewürzen, scharf, mit Käse im Rand und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein, 20cm',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Mittel, 25cm',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß, 30cm',
                        'price': '5,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ananas',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Hackfleisch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Spaghetti',
                        'price': '1,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ei',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'Käse im Rand',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Pizza Margherita',
                'category': 'Hauptgericht',
                'description': '',
                'basic_price': '6,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Ananas, mit Champignons, mit Ei, mit Gewürzen, scharf, mit Käse im Rand und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein, 20cm',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Mittel, 25cm',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß, 20cm',
                        'price': '5,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ananas',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Hackfleisch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Spaghetti',
                        'price': '1,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ei',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'Käse im Rand',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Pizza Diavolo (scharf)',
                'category': 'Hauptgericht',
                'description': 'mit Salami, Zwiebeln, Peperoni und Knoblauch',
                'basic_price': '8,00€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Ananas, mit Champignons, mit Ei, mit Gewürzen, scharf, mit Käse im Rand und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein, 20cm',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Mittel, 25cm',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß, 20cm',
                        'price': '5,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ananas',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Hackfleisch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Spaghetti',
                        'price': '1,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Ei',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'Käse im Rand',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Wasser aus Italien',
                'category': 'Getränke',
                'description': 'mit Kohlensäure',
                'basic_price': '2,50€',
                'productinfo': 'soon to be added',
                'addon_description': '',
                'addon_categories': [{ 'name': 'Menge', 'description': 'Wählen Sie eine Menge:' }],
                'addons': [
                    {
                        'category': 'Menge',
                        'name': '1 Stück',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Menge',
                        'name': '6 Stück',
                        'price': '10,00€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Pizzabrötchen',
                'category': 'Beilage',
                'description': 'mit Käse und Knoblauch',
                'basic_price': '4,50€',
                'productinfo': 'soon to be added',
                'addon_description': '',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': '6 Stück',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': '9 Stück',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    }
                ]
            }
        ]
    ],
    [
        {
            'name': 'Döner from Paradise',
            'min_price': '5,00€',
            'delivery_costs': '2,50€',
            'delivery_costs_max': '20,00€',
            'information': 'coming soon',
            'logo_path': './img/Paradise Döner.png',
            'main_img_path': './img/bg_doener.jpg',
            'categories': ['Hauptgericht','Salat','Kleinigkeiten'],
            'rating': {
                'rating_value': '15',
                'rating_number': '2560'
            }
        },
        [
            {
                'name': 'Kebab Teller',
                'category': 'Hauptgericht',
                'description': 'mit gegrilltem Truthahnfleisch, Salat und Pommes',
                'basic_price': '8,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: diverse Soßen, mit Knoblauch, mit Champignons, mit Gewürzen (scharf), mit Käse überbacken und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Soße', 'description': 'Ihre Soße:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '3,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Oliven',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'mit Käse überbacken',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'mit extra Currysoße',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'mit extra Mayonaise',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Döner Kebab',
                'category': 'Hauptgericht',
                'description': 'mit gegrilltem Truthahnfleisch und Fladenbrot',
                'basic_price': '4,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Ananas, mit Champignons, mit Ei, mit Gewürzen, scharf, mit Käse im Rand und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '3,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Oliven',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'mit Käse überbacken',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Döner Kebab (vegetarisch)',
                'category': 'Hauptgericht',
                'description': 'mit Falafeln',
                'basic_price': '7,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: mit Knoblauch, mit Champignons, mit Gewürzen (scharf), mit Käse überbacken und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '3,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Champignons',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Gewürzen, scharf',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Oliven',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'mit Käse überbacken',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Salat (vegetarisch)',
                'category': 'Salat',
                'description': 'mit Tomate, Gurke und Karotte',
                'basic_price': '5,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus verschiedenen Dressings.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Dressing', 'description': 'Ihr Dressing:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '3,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Dressing',
                        'name': 'Sylter',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Dressing',
                        'name': 'Öl und Essig',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Pommes',
                'category': 'Kleinigkeiten',
                'description': '',
                'basic_price': '2,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: Rot, Weiß oder Rotweiß.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Soße', 'description': 'Ihre Soße:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '1,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'Ketchup',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'Mayonaise',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Käsesticks',
                'category': 'Kleinigkeiten',
                'description': '',
                'basic_price': '1,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: Rot, Weiß oder Rotweiß.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Soße', 'description': 'Ihre Soße:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': '4 Stück',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': '10 Stück',
                        'price': '3,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'Ketchup',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Soße',
                        'name': 'Mayonaise',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            }
        ]
    ],
    [
        {
            'name': 'Noodles from Paradise',
            'min_price': '5,00€',
            'delivery_costs': '5,00€',
            'delivery_costs_max': '55,00€',
            'information': 'coming soon',
            'logo_path': './img/Paradise Noodles.png',
            'main_img_path': './img/bg_noodles.jpg',
            'categories': ['Hauptgericht','Beilage'],
            'rating': {
                'rating_value': '90',
                'rating_number': '666'
            }
        },
        [
            {
                'name': 'Nudelbox',
                'category': 'Hauptgericht',
                'description': 'mit gegrilltem Gemüse',
                'basic_price': '5,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: diverse Soßen, mit Knoblauch, mit Gewürzen (scharf), mit Käse überbacken und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Fleisch', 'description': 'Ihre Zutat:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Hähnchen',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Ente',
                        'price': '3,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Rind',
                        'price': '4,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'extra scharf',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Süßsauer-Soße',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Maggiersatz',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Chop-Suey',
                'category': 'Hauptgericht',
                'description': 'mit gegrilltem Reis und gegrilltem Gemüse',
                'basic_price': '8,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: diverse Soßen und Fleischsorten, mit Knoblauch, mit Gewürzen (scharf) und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Fleisch', 'description': 'Ihre Zutat:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Hähnchen',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Ente',
                        'price': '3,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Rind',
                        'price': '4,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'extra scharf',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Süßsauer-Soße',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Maggiersatz',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Sze-Chuan',
                'category': 'Hauptgericht',
                'description': 'mit Gemüse und Cashewnüssen',
                'basic_price': '6,50€',
                'productinfo': 'soon to be added',
                'addon_description': 'Wahl aus: diverse Soßen und Fleischsorten, mit Knoblauch, mit Gewürzen (scharf) und mehr.',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }, { 'name': 'Extras', 'description': 'Ihre Extras:' }, { 'name': 'Fleisch', 'description': 'Ihre Zutat:' }, { 'name': 'Sonderwunsch', 'description': 'Ihre Sonderwünsche:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': 'Klein',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': 'Groß',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Hähnchen',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Ente',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Fleisch',
                        'name': 'mit Rind',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Knoblauch',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit Peperoni',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Sonderwunsch',
                        'name': 'extra scharf',
                        'price': '2,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit doppelter Sze-Chuan-Soße',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Extras',
                        'name': 'mit extra Maggiersatz',
                        'price': '0,50€',
                        'productinfo': 'soon to be added'
                    }
                ]
            },
            {
                'name': 'Chicken Nuggets',
                'category': 'Beilage',
                'description': 'mit Süß-Sauer-Soße',
                'basic_price': '4,50€',
                'productinfo': 'soon to be added',
                'addon_description': '',
                'addon_categories': [{ 'name': 'Größe', 'description': 'Wählen Sie eine Größe:' }],
                'addons': [
                    {
                        'category': 'Größe',
                        'name': '6 Stück',
                        'price': '0,00€',
                        'productinfo': 'soon to be added'
                    },
                    {
                        'category': 'Größe',
                        'name': '9 Stück',
                        'price': '2,00€',
                        'productinfo': 'soon to be added'
                    }
                ]
            }
        ]
    ]
]