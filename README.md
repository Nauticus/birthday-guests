# Birthday Guests
Outputs birthday guests in close proximity.
___

### Usage
To install dependancies:
```
yarn install
```

To build:
```
yarn build
```
After the build is complete we can follow with:
```
yarn start output-guests [options] <source>
```

More on the usage of the `output-guests` command can be found with:
```
yarn start help output-guests
```
You can run the command with `/partners.json`.

Both options have default values set as part of the task:
| options           | default value        | format              |
|-------------------|----------------------|---------------------|
| event-coordinates | 42.6665921,23.351723 | lat,lon \| lat, lon |
| range             | 100                  | number              |

**The output of the application can be found at root level - `./output.json`**
