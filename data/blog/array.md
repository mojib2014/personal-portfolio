---
title: What's Is an Array?
date: '2022-03-01'
tags: ['Data Structures', 'Algoritms', 'Arrays']
draft: true
summary: An Array is a collection(list) of items. The items can really be anything, integers, strings, arrays, objects... etc.
---

> An Array is a collection of items or list of items. The items could be integers, strings, DVDs, games, DVDs—anything really. The items are stored in neighboring (contiguous) memory locations. Because they're stored together, checking through the entire collection of items is straightforward.

# Array - A DVD Box?

Suppose you have a bunch of DVDs at home that you want to arrange neatly. What will be a better choice for storing them? You could get a cardboard box(or other types of box) big enough to arrange all of the DVDs neatly, right? it's that simple. However, you might want to add a new DVD to the box, or you might want to get rid of the old ones that you've read a bunch of times over in the past. An important consideration for this box would be that you would only place DVDs in it nothing else; you wouldn't put your clothes in it, for example. The box would contain multiple items, but all of the items would be of the same type. in this case, that type is DVDs. Items of the same type share properties. For DVDs, those properties include:

- All the DVDs would be inside a platic cover.
- The cover would have the name of the movie, the cast and all sorts of other details.
- All the covers would be of exactly the same size and would contain just one, and only one, DVD.

You might not name the DVD box, but when you want your friend to find a DVD, you'd tell him/her that the DVD is inside your "DVDs box", and she/he would intantly know where to find the box. This is very simple yet realistic example that is easy to understand and relate to. Now let's move over to the world of computers and port this example to programming.

![DVD Cover](/public/blog/array/dvd_cover.png)
| Image Credits - Fig.1 - leetcode.com

Suppose you were told to build a software to keep track of all the DVDs in an inventory.
This is the exact same scenario that we just described above, but on a much larger scale. So let's imagine the DVDs box as a virtual DVDs library. For each DVD, you would have certain properties that would be specific attributes of the DVDs themselves.
In addition to the properties of a DVD, you're also told the maximum number of DVDs that can be stored in the inventory. Obviously, you wouldn't want to store ancient DVDs from the 1900s unless the were popular ones, right? Say you were told that the requirement is to maintain a maximum inventory of just 100 DVDs. This is an important piece of information because, without this, you wouldn't be able to find the perfectly sized box to fit all the DVDs easily. How could we find a box of a particular sie that would be able to fit a maximum of 100 DVDs? Well, lucky for us, we don't need to physically find a cardboard box or anything-there's a programming construct for this purpose. That programming construct is known as an `Array`.

## Table of Contents

1. [Creating an Array](#creating-an-array)
2. [Accessing Elements in an Array](#accessing-elements-in-arrays)
3. [Writting Items into an Array](#writing-items-into-an-array)
4. [Reading Items from an array](#reading-items-from-an-array)
5. [Writting Items into an Array with a Loop](#writting-items-into-an-array-with-a-loop)
6. [Reading Items from an Array with a Loop](#reading-items-from-an-array-with-a-loop)

## Creating an Array

On a computer, Arrays can hold up to `N` items. the value of `N` is decided by you, the programmer, at the time you create the Array. In some programming languages, like `JavaScript` Arrays are dynamic (means it will automatically resize as you add more items, when it gets filled).
In `Java` Arrays are static (means you have specify a size and will not resize to fit more items). This is the same as when we found a big enough cardboard box for the DVDs.
Additionally, you also have to specify the type of items that will be going into the Array.

In **Java**, we use the following code to create an Array to hold up to 5 DVDs.
For simplicity we'll not create a `Class` (blueprint) for our DVDs here, we'll use built in `Java array` and store only the name of the movie as string in the array.

```java
// The actual code for creating an Array to hold movies.
// For simplicity we will store just the names of the movies.
String[] movies = new String[5];
// type string, variable name (movies) and we make it to hold only 5 items(movies)
```

After running the above code, we now have an Array called `movies`, with **5** places in it. Each place can hold one movie. At the start, there are no movies in the Array; we'll have to actually put them in.

The Array can only hold up to **5** movies. if we get a 6th movie, we'll need to make a new Array. We'll look at how we deal with running out of space, in the next section.

Before we move onto actually putting some movies into the Array, though, one thing you might be wondering is why we'd make an Array with only **5** places. Why not make it hold **100000** movies so that we know for sure we'll always have enough space?

Well, the reason is the same as it is for physical cardboard box of DVDs. Do you really want to find a box that could hold **100000** DVDs when you currently only have **5** movies and, in fact, never expect to own more than **100** of them? Is it even worth getting a box that big right now.

It's exactly the same with Array in computer, You don't want to waste space when you might never you use it.

## Accessing Elements in Arrays

> The two primitive Array operations are writting elements into them, and reading elements from them. Alll other Array operations are built on top of these two primitive operations.

### Writing Items into an Array

To put a movie into the Array, we need to decide which of the 5 places we'd like it to go in. Each of the places is identified using a number in the range of `0` to `N - 1`. The 1st place is `0`, the 2nd place is `1`, the 3rd place is `3`...all the way to the 5th place, which is `4`. We cal these numbers that identify each place **indexes**.

Let's put the movie for the Avengers into the 3rd place of the Array we created above.

```java
// We stared numbering from 0, the index we want is 2.
movies[2] = 'The Avengers";
```

And that's it. We've put the movie for the Avengers into our Array! Let's put a few more movies in.

```java
// Put "Finding Dory" into the 1st place: index 0.
movies[0] = "Finding Dory";

// Put "Star Wars" into the 4th place: index 3.
movies[3] = "Star Wars";

// Put "The Lion King" into the 2nd place: index 1.
movies[1] = "The Lion King";
```

## Reading Items from an Array

We can check what's at a particular Array index.

```java
// Print out what's in indexes 4, 3, and 1.
System.out.println(movies[4]);
System.out.println(movies[3]);
System.out.println(movies[1]);

// Will print:
// null
// Star Wars
// The Lion King
```

Notice that because we haven't yet put anything at index 4, the value it contains is `null`. In other languages, such as **C**, the Array slot could contain completely random data. Java always initializes empty Array slots to `null` if the Array contains objects, or to default values if it contains primitive types. For example, the array `int [] `would contain the default value of `0` for each element, `float[]` would contain default values of `0.0`, and `bool[]` would contain default values of `false`.

## Writting Items into an Array with a Loop

We commonly use a loop to put lots of values into an Array. To illustrate this, let's go to another example. This time, we're going to create an Array of `int`s and put the first `10` square numbers inot it.

```java
// Creatting an Array of integers with 10 slots(places)
int[] squareNumbers = new int[10];

// Go through each of the Array indexes, from 0 to 9.
for (int i = 0; i < 10; i++) {
    // We need to be careful with the 0-indexing. The next square number
    // is given by (i + 1) * (i + 1).
    // Calculate it and insert it into the Array at index i.
    int square = (i + 1) * (i + 1);
    squareNumbers[i] = square;
}
```

## Reading items from an Array with a Loop

We can also use a loop to print out everything that's in the Array.

```java
// Go through each of the Array indexes, from 0 to 9.
for (int i = 0; i < 10; i++) {
    // Access and print what's at the i'th index.
    System.out.println(squareNumbers[i]);
}

// Will print:
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81
// 100
```

One last thing worth knowing now is that there's a more elegant way of printing out the values of an Array-a variant of the for loop, commonly reffered to as a "for each" loop.

```java
// For each values in the Array.
for (int square : squareNumbers) {
    // Print the current value of square.
    System.out.println(square);
}

// Prints exactly the same as the previous example.
```

You'll probably agree that this code is a lot simpler to read. We can use it whenever we don't need the index values. For actually writing the squares into the Array, it wouldn't have worked because we needed to work with the actual index numbers. You don't have to use a "for each" loop when you're starting out, but we recommend you become comfortable with it before interviews. Simple, elegant code is good code!

## Know ahead of time what you will store in to the Array

If you know what you are going to store in the Array ahead of time, Than there a more elegant way to initialize an Array and at the same time store your elements.

```java
int[] numbers = { 1, 2, 3, 4, 5, 6 };

for (int number : numbers) {
    System.out.println(number);
}

// Will print:
// 1
// 2
// 3
// 4
// 5
// 6
```

## Array Capacity

Let's say we've created a new Array like this.

`int[] array = new int[6];`

Is it a valid operation to insert an element at `array[6]`? What about `array[10]?

Nope, neither of these are valid. When we created the Array,, we specified that it can hold up to 6 elements. This is the Array's **capacity**.

Remmembering that indexing starts at `0`, we can only insert items at `array[0]`, `array[1]`, `array[2]`, `array[3]`, `array[4]`, and `array[5]`. Trying to put an element anywhere else, such as `array[-3]`, `array[6]`, or `array[100]` will cause your code to crash with an `ArrayIndexOutOfBoundsException`!

The Array's capacity must be decided when the Array is created. The capacity cannot be changed later. Going back to our DVDs-in-a-cardboard-analogy, changing the capacity of an Array would be asking to trying to make a cardboard box bigger. Trying to make a fixed-size cardboard box bigger is impractical, and it's the same as an Array on a computer!

So, what do we do if we get a 6th DVD and we'd like all our DVD's in the same Array? well, unfortunaely it's the same as it is with our cardboard box. We'll need to go get a larger one, and then move all the existing DVD's into it, along with the new one.

The capacity of an Array in Java can be checked by looking at the value of its `length` attribute. This is done using the code `arr.length`, where `arr` is the name of the Array. Different programming languages have different ways of chekcing the length of an Array.

```java
int capacity = array.length;
System.out.println("The Array has capacity of " + capacity);
```

Running this code will give the following ouput:

```java
The Array has a capacity of 6
```

## Array Length

The other definition of **length** is the number of DVDs, or other items, currently in the Array. This is something you'll need to keep track of yourself, and you won't get any errors if you overwrite and existing DVD, or if you leave a gap in the Array.

You might have noticed that we've been using a `length` variable in our previous example, to keep track of the next exmpty index.

```java
// Create a new array with a capacity of 6.
int[] array = new int[6];

// Current length is 0, because it has 0 elements.
int length = 0;

// Add 3 items into it.
for (int i = 0; i < 3; i++) {
    array[i] = i * i;
    // Each time we add an element, the length goes up by one.
    length++;
}

System.out.println("The Array has capacity of " + array.length);
System.out.println("The Array has a length of " +  length);
```

Running this code will give the following output:

```java
The Array has a capacity of 6
The Array has a length of 3
```
