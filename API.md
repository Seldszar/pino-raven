<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [index][1]
    -   [Parameters][2]
    -   [Stream][3]
-   [StreamOptions][4]
    -   [Properties][5]
-   [Stream][6]
    -   [Parameters][7]

## index

Create a new stream.

### Parameters

-   `options` **[StreamOptions][8]** The stream options. (optional, default `{}`)

Returns **[Stream][9]** The stream.

### Stream

A Raven stream for Pino.

Type: [Stream][9]

## StreamOptions

Type: [Object][10]

### Properties

-   `client` **Raven.Client** The Raven client.
-   `errorFieldNames` **[Array][11]&lt;[String][12]>** The error field names.

## Stream

**Extends stream.Writable**

A Raven stream for Pino.

### Parameters

-   `options` **[StreamOptions][8]** The stream options. (optional, default `{}`)
    -   `options.client` **[Object][10]** The Raven client. (optional, default `Raven`)
    -   `options.errorFieldNames` **[Array][11]&lt;[String][12]>** The error field names. (optional, default `["err","error"]`)

[1]: #index

[2]: #parameters

[3]: #stream

[4]: #streamoptions

[5]: #properties

[6]: #stream-1

[7]: #parameters-1

[8]: #streamoptions

[9]: #stream

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
