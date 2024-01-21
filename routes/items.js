const Item = require ('../item')
const express = require('express');

const router = express.Router();

// 1) GET / => [item, ...]

router.get('', (req, res, next) => {
    try {
        return res.json({items: Item.findAll()});
    }
    catch(err) {
        return next(err)
    }
});

// 2) POST / {name, price} => new-item

router.post('', (req, res, next) => {
    try {
        let newItem = new Item(req.body.name, req.body.price);
        return res.json({item: newItem});
    }
    catch (err) {
        return next(err)
    }
});

// 3) GET /[name] => item

router.get('/:name', (req, res, next) => {
    try {
        let foundItem = Item.find(req.params.name);
        return res.json({item:foundItem});
    }
    catch(err) {
        return next(err)
    }
});

// 4) PATCH /[name] => item

router.patch('/:name', (req, res, next) => {
    try {
        let foundItem = Item.update(req.params.name, req.body);
        return res.json({item: foundItem});
    }
    catch(err) {
        return next(err)
    }
});

// 5) DELETE /[name] => "Removed"

router.delete('/:name', (req, res, next) => {
    try {
        Item.remove(req.params.name);
        return res.json({message:'Deleted'});
    }
    catch(err) {
        return next(err)
    }
});

module.exports = router;