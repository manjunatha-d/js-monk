/**
 * Maps
 *
 * 1. You can use objects as keys. That's the only big advantage I see over normal JS objects. e.g. You can add DOM nodes as keys.
 *        https://github.com/wesbos/es6-articles/blob/master/65%20-%20Map%20Metadata%20with%20DOM%20Node%20Keys.md
 * 2. Map interface provides a iterator, so you can use `for of` loop
 *
 * Weak Maps
 *
 * 1. Don't have size => You can never know how many items are there in a weak map
 * 2. Not enumerable => wYou can't loop over a weak map (you can't use `for of` loop)
 * 3. Only advantage is, if the items inside a weak map are not referenced anywhere else in the application, they will be garbage collected.
 *        It appears that the items inside a normal object don't get garbage collected automatically when there are no references to them.
 *        (Objects get GCd, but not items inside them)
 *
 * IMPORTANT:
 *  When the objects inside a strong map no longer exist (set to null/undefined), the map still holds references to them, and they are not GCd.
 *  That's a memory leak. To prevent this, use Weak Maps.
 */
