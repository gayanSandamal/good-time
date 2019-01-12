# good-time
// good-time.js by Gayan Sandamal
// LinkedIn - https://www.linkedin.com/in/gayan-sandamal/

good-time.js will reduce your development time in getting time differences between two standard times.

1.  import the goodTimeDiff method from good-time.js to your project
    import {goodTimeDiff} from './scripts/good-time.js'

2. declare an object to give settings like below.
    let settings = {}
    
3. now assign time values to the declared object variable.
   ***time must be in standard format and must be a string!
   ***'from' is optional the default value will be the browser current time. 
   
    let settings = {
      'from': '2019-01-13T00:00:29.251Z',
      'to': '2018-09-22T17:15:29.251Z'
    }
    
4. now calllback the method called goodTimeDiff() and pass the settings object variable as a parameter.
   goodTimeDiff(settings)
   
5. Finally assign the method to any variable you want.
   let lastCommentedTime = goodTimeDiff(timeSettings)
