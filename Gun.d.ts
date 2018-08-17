/** Declaration file generated by dts-gen */

export default Gun;

declare class Gun {
    constructor();
    constructor(o: any);

    back(n: any, opt: any): any;

    chain(sub?: any): any;

    get(key: any, cb?: any, as?: any): any;

    map(cb?: any, opt?: any, t?: any): any;

    off(): any;

    on(tag: any, arg: any, eas: any, as: any): any;

    once(cb: any, opt: any): any;

    opt(opt: any): any;

    put(data: any, cb?: any, as?: any): any;

    set(item: any, cb?: any, opt?: any): any;

    toJSON(): void;

    val(cb: any, opt: any): any;

    static node: any;
    static val: any;
    static chain: any;

    static HAM(machineState: any, incomingState: any, currentState: any, incomingValue: any, currentValue: any): any;

    static Mesh(ctx: any): any;

    static ask(cb: any, as: any): any;

    static create(at: any): any;

    static dup(opt: any): any;

    static is($: any): any;

    static log(...args: any[]): any;

    static on(tag: any, arg: any, as: any): any;

    static serve(req: any, res: any, next: any): any;

    static state(): any;

    static tag: {
        create: {
            last: {
                as: any;
                back: {
                    as: any;
                    back: {
                        as: any;
                        back: any;
                        next: any;
                        off: any;
                        on: any;
                        the: any;
                        to: any;
                    };
                    next: any;
                    off: any;
                    on: any;
                    the: any;
                    to: any;
                };
                next: any;
                off: any;
                on: any;
                the: any;
                to: {
                    next: any;
                };
            };
            tag: string;
            to: {
                as: any;
                back: any;
                next: any;
                off: any;
                on: any;
                the: any;
                to: {
                    as: any;
                    back: any;
                    next: any;
                    off: any;
                    on: any;
                    the: any;
                    to: {
                        as: any;
                        back: any;
                        next: any;
                        off: any;
                        on: any;
                        the: any;
                        to: {
                            next: any;
                        };
                    };
                };
            };
        };
        opt: {
            last: {
                as: any;
                back: {
                    as: any;
                    back: {
                        as: any;
                        back: {
                            as: any;
                            back: {
                                as: any;
                                back: any;
                                next: any;
                                off: any;
                                on: any;
                                the: any;
                                to: any;
                            };
                            next: any;
                            off: any;
                            on: any;
                            the: any;
                            to: any;
                        };
                        next: any;
                        off: any;
                        on: any;
                        the: any;
                        to: any;
                    };
                    next: any;
                    off: any;
                    on: any;
                    the: any;
                    to: any;
                };
                next: any;
                off: any;
                on: any;
                the: any;
                to: {
                    next: any;
                };
            };
            tag: string;
            to: {
                as: any;
                back: any;
                next: any;
                off: any;
                on: any;
                the: any;
                to: {
                    as: any;
                    back: any;
                    next: any;
                    off: any;
                    on: any;
                    the: any;
                    to: {
                        as: any;
                        back: any;
                        next: any;
                        off: any;
                        on: any;
                        the: any;
                        to: {
                            as: any;
                            back: any;
                            next: any;
                            off: any;
                            on: any;
                            the: any;
                            to: {
                                as: any;
                                back: any;
                                next: any;
                                off: any;
                                on: any;
                                the: any;
                                to: {
                                    next: any;
                                };
                            };
                        };
                    };
                };
            };
        };
    };

    static version: number;
}

declare namespace gun {
    namespace HAM {
        const prototype: {};
    }

    namespace Mesh {
        const prototype: {};

        function hash(s: any): any;

        namespace hash {
            const prototype: {};
        }
    }

    namespace ask {
        const prototype: {};
    }

    namespace bi {
        function is(b: any): any;

        namespace is {
            const prototype: {};
        }
    }

    namespace chain {
        function back(n: any, opt: any): any;

        function chain(sub: any): any;

        function get(key: any, cb: any, as: any): any;

        function map(cb: any, opt: any, t: any): any;

        function off(): any;

        function on(tag: any, arg: any, eas: any, as: any): any;

        function once(cb: any, opt: any): any;

        function opt(opt: any): any;

        function put(data: any, cb: any, as: any): any;

        function set(item: any, cb: any, opt: any): any;

        function toJSON(): void;

        function val(cb: any, opt: any): any;

        namespace back {
            const prototype: {};
        }

        namespace chain {
            const prototype: {};
        }

        namespace get {
            const prototype: {};
        }

        namespace map {
            const prototype: {};
        }

        namespace off {
            const prototype: {};
        }

        namespace on {
            const prototype: {};
        }

        namespace once {
            const prototype: {};
        }

        namespace opt {
            const prototype: {};
        }

        namespace put {
            const prototype: {};
        }

        namespace set {
            const prototype: {};
        }

        namespace toJSON {
            const prototype: {};
        }

        namespace val {
            const prototype: {};
        }
    }

    namespace create {
        const prototype: {};
    }

    namespace dup {
        const prototype: {};
    }

    namespace fn {
        function is(fn: any): any;

        namespace is {
            const prototype: {};
        }
    }

    namespace graph {
        function ify(obj: any, env: any, as: any): any;

        function is(g: any, cb: any, fn: any, as: any): any;

        function node(node: any): any;

        function to(graph: any, root: any, opt: any): any;

        namespace ify {
            const prototype: {};
        }

        namespace is {
            const prototype: {};
        }

        namespace node {
            const prototype: {};
        }

        namespace to {
            const prototype: {};
        }
    }

    namespace is {
        const prototype: {};
    }

    namespace list {
        const index: number;

        function is(l: any): any;

        function map(l: any, c: any, _: any): any;

        function slit(p0: any, p1: any): any;

        function sort(k: any): any;

        namespace is {
            const prototype: {};
        }

        namespace map {
            const prototype: {};
        }

        namespace sort {
            const prototype: {};
        }
    }

    namespace log {
        const prototype: {};

        function once(w: any, s: any, o: any): any;

        namespace once {
            const prototype: {};

            const welcome: number;
        }
    }

    namespace node {
        function ify(obj: any, o: any, as: any): any;

        function is(n: any, cb: any, as: any): any;

        function soul(n: any, o: any): any;

        namespace ify {
            const prototype: {};
        }

        namespace is {
            const prototype: {};
        }

        namespace soul {
            const prototype: {};

            function ify(n: any, o: any): any;

            namespace ify {
                const prototype: {};
            }
        }
    }

    namespace num {
        function is(n: any): any;

        namespace is {
            const prototype: {};
        }
    }

    namespace obj {
        function as(o: any, k: any, v: any, u: any): any;

        function copy(o: any): any;

        function del(o: any, k: any): any;

        function empty(o: any, n: any): any;

        function has(o: any, k: any): any;

        function ify(o: any): any;

        function is(o: any): any;

        function map(l: any, c: any, _: any): any;

        function put(o: any, k: any, v: any): any;

        function to(from: any, to: any): any;

        namespace as {
            const prototype: {};
        }

        namespace copy {
            const prototype: {};
        }

        namespace del {
            const prototype: {};
        }

        namespace empty {
            const prototype: {};
        }

        namespace has {
            const prototype: {};
        }

        namespace ify {
            const prototype: {};
        }

        namespace is {
            const prototype: {};
        }

        namespace map {
            const prototype: {};
        }

        namespace put {
            const prototype: {};
        }

        namespace to {
            const prototype: {};
        }
    }

    namespace on {
        const prototype: {};

        function get(msg: any, gun: any): any;

        function off(): any;

        function put(msg: any, gun: any): any;

        namespace get {
            const prototype: {};
        }

        namespace off {
            const prototype: {};
        }

        namespace put {
            const prototype: {};
        }
    }

    namespace prototype {
        function back(n: any, opt: any): any;

        function chain(sub: any): any;

        function get(key: any, cb: any, as: any): any;

        function map(cb: any, opt: any, t: any): any;

        function off(): any;

        function on(tag: any, arg: any, eas: any, as: any): any;

        function once(cb: any, opt: any): any;

        function opt(opt: any): any;

        function put(data: any, cb: any, as: any): any;

        function set(item: any, cb: any, opt: any): any;

        function toJSON(): void;

        function val(cb: any, opt: any): any;

        namespace back {
            const prototype: {};
        }

        namespace chain {
            const prototype: {};
        }

        namespace get {
            const prototype: {};
        }

        namespace map {
            const prototype: {};
        }

        namespace off {
            const prototype: {};
        }

        namespace on {
            const prototype: {};
        }

        namespace once {
            const prototype: {};
        }

        namespace opt {
            const prototype: {};
        }

        namespace put {
            const prototype: {};
        }

        namespace set {
            const prototype: {};
        }

        namespace toJSON {
            const prototype: {};
        }

        namespace val {
            const prototype: {};
        }
    }

    namespace serve {
        const prototype: {};
    }

    namespace state {
        const drift: number;

        const prototype: {};

        function ify(n: any, k: any, s: any, v: any, soul: any): any;

        function is(n: any, k: any, o: any): any;

        function lex(): any;

        function map(cb: any, s: any, as: any): any;

        function to(from: any, k: any, to: any): any;

        namespace ify {
            const prototype: {};
        }

        namespace is {
            const prototype: {};
        }

        namespace lex {
            const prototype: {};
        }

        namespace map {
            const prototype: {};
        }

        namespace to {
            const prototype: {};
        }
    }

    namespace text {
        function ify(t: any): any;

        function is(t: any): any;

        function match(t: any, o: any): any;

        function random(l: any, c: any): any;

        namespace ify {
            const prototype: {};
        }

        namespace is {
            const prototype: {};
        }

        namespace match {
            const prototype: {};
        }

        namespace random {
            const prototype: {};
        }
    }

    namespace time {
        function is(t: any): any;

        namespace is {
            const prototype: {};
        }
    }

    export namespace val {
        function is(v: any): any;

        namespace is {
            const prototype: {};
        }

        namespace link {
            function ify(t: any): any;

            function is(v: any): any;

            namespace ify {
                const prototype: {};
            }

            namespace is {
                const prototype: {};
            }
        }

        namespace rel {
            function ify(t: any): any;

            function is(v: any): any;

            namespace ify {
                const prototype: {};
            }

            namespace is {
                const prototype: {};
            }
        }
    }
}
