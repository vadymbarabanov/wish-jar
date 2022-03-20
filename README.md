# Wish Jar

### Styling order preferences

```javascript
StyleSheet.create({
    example: {
        // 1. Position
        position: 'relative',
        top: 0,
        left: 0,
        transform: [{ rotate: '45deg' }],

        // 2. Flex stuff
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        // 3. Box sizes
        width: 10,
        minHeight: 20,

        // 4. Margins & paddings
        margin: 10,
        padding: 5,

        // 5. Border stuff
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,

        // 6. Background stuff
        backgroundColor: 'blue',

        // 7. Text stuff
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
);
```
