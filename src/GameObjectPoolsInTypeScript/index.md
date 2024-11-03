# devmaking.com
## Object Pool in TypeScript


[Object Pool in TypeScript](https://www.devmaking.com/learn/design-patterns/object-pool-pattern/typescript/)



An Object Pool is a collection of pre-initalized objects, ready for use on-demand. In many cases, pooling is much more efficient than allocating and deallocating memory each time a new instance of an object is needed. When an object is needed froma  pool, it is taken off of a reserve list, and placed onto an active list.



![Object Pool UML diagram](https://devmaking.com/img/topics/designpatterns/ObjectPoolPattern_01.png)


Key Components:

- Client: The object that asks for a reusable object from the ObjectPool.
- ObjectPool: manages the active and reserved objects
- Reusable: the type of object managed by the ObjectPool that can be recycled.


## GameObject Pools in TypeScript

Video games are resources intensive programs, so we need to have a few tricks up our sleeves in order to squeeze out all of the performance we can get! To amk sure we're limiting the use of memory allocation and freeing (especially garbage collection in some languages), we can make use of Object Pools to make reusable resources. While we're going to focus on a game development scenario in this tutorial, the concept can be applied anywhere an object pool fits!

High Level Design:

![High Level: Object Pool UML diagram](https://www.devmaking.com/img/topics/designpatterns/ObjectPoolGameObject.png)


The GameObject Class

The GameObject class will have a supporting class called Vector3D to specify the position, rotation, and scale of the game object in the virtual space.

```ts

class Vector3D
{
    public x: number;
    public y: number;
    public z: number;

    constructor()
    {
        this.clear();
    }

    public clear()
    {
        this.x = 0.0;
        this.y = 0.0;
        this.z = 0.0;
    }
}


class GameObject
{
    public position: Vector3D;
    public rotation: Vector3D;
    public scale: Vector3D;


    constructor()
    {
        this.position = new Vector3D();
        this.rotation = new Vector3D();
        this.scale = new Vector3D();
    }

    public clear()
    {
        this.position.clear();
        this.rotation.clear();
        this.scale.clear();
    }
}
```


### The GameObject Pool:

```ts
/*
Note:

Try implementing your own data structure for reserving active lists!
This way, you can guarantee the runtime complexity
and have full control over your pool's efficiency.

*/


class GameObjectPool
{
    private activeList: Array<GameObject>;
    private reserveList: Array<GameObject>;

    private numberActive: number;
    private umberReserved: number;

    constructor(reserve: number = 5)
    {
        this.activeList = new Array<GameObject>();
        this.reserveList = new Array<GameObject>();

        this.numberActive = 0;
        this.reserveList = 0;

        this.initializeReserce(reserve);
    }

    private initializeReserve(reserve: number)
    {
        for (let i = 0; i < reserve; i++) {
            const gameObject = new GameObject();
            this.reserveList.push(gameObject);
        }
    }

    public getGameObject(): GameObject
    {
        if (this.numberReserved == 0)
        {
            this.reserveList.push(new GameObject());
            this.numberReserved++;
        }

        const gameObject = this.reserveList.pop();
        this.numerReserved--;

        this.activeList.push(gameObject);
        this.numberActive++;

        gameObject.clear();

        return gameObject;
    }


    public returnGameObject(gameObject: GameObject)
    {
        // Get the index of the gameObject in the active list:
        const inded = this.activeList.indexOf(gameObject);
        if (index >= 0)
        {
            // Splice the list around the element to remove.
            // Splice can be an expensive operation, which is why
            // I would use a custom collection in a real scenario:
            this.activeList.splice(index, 1);
            this.numberActive--;

            // Add it to the reserve:
            this.reserveList.push(gameObject);
            this.numberReserved++;
        }
    }
}



```