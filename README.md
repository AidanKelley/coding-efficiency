# Hi

This lets you record whenever you press a key
(it will only record the time of the key press, not the actual key)
to help you record how fast you are typing. It's pretty rudimentary,
but should help you measure how fast you are coding (you can then
plot the output data in excel) if for some reason you experimenting
to see how fast you code under different scenarios.

## running it

Navigate to the project, then do
```bash
node index.js
```
You can also choose to log all of your typing into a single log file by doing
```bash
node index.js -l
```

Then, a `csv` file will be created in the output folder which logs
a timestamp for every time you press any key. 