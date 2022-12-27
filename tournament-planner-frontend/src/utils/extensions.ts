

export function sum<T>(arr: T[], selector: (item: T) => number): number {
    return arr.reduce((total, o) => total + selector(o), 0);
}


export function generateFormation(numPlayers: number, rows?: number): number[] {
    let playersLeft = numPlayers - 1; //remove keeper
    const formation = Array(rows || 4).fill(0);
    return formation.map((x, i) => {
        if (i === 0) return 1;
        if (i === (formation.length - 1)) return playersLeft;
        let val = (numPlayers / (formation.length - 1)) + (1 - 1 / i * 0.35);

        val = Math.floor(val);
        playersLeft -= val;
        return val;
    })
}

export class Grouping<T> extends Array<T> {
    public key: string;
    private constructor(key: string, items: Array<T>) {
        super(...items)
        this.key = key;
    }

    static create<T>(key: string): Grouping<T> {
        return Object.create(Grouping.prototype, { key: { value: key } });
    }
}

declare global {
    interface Array<T> {
        key: string
        groupBy(selector: (o: T) => string): Array<Grouping<T>>;
    }
}
Array.prototype.groupBy = function <T>(this: T[], selector: (o: T) => string) {
    let initialValue: Grouping<T>[] = []
    return this.reduce((groups: Grouping<T>[], currentValue: T) => {
        const key = selector(currentValue)
        let group = groups.find(x => x.key === key)
        if (!group) {
            group = Grouping.create(key)
            groups.push(group)
        }
        group.push(currentValue)
        return groups;
    }, initialValue)
}