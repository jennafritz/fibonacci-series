def fibonacci(num)
  # type your code in here
  fibonacci_hash = [0, 1]

  index = 2

  while index <= num do
    fibonacci_hash[index] = fibonacci_hash[index - 1] + fibonacci_hash[index - 2]
    index += 1
  end

  fibonacci_hash[num]

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts "Expecting: 2"
  puts "=>", fibonacci(3)

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts "Expecting: 5"
  puts "=>", fibonacci(5)

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file

  # initialize an array with first two fibonacci elements: [0, 1]
  # loop through array, beginning at index 2, adding the previous two elements together to get the next value
  # stop when the nth element is reached
  # return value at index n

# And a written explanation of your solution
