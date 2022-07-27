import path from "path";
import { parseUnits } from "ethers/lib/utils";

const ADDRESS = {
    ZERO: `0x${'0'.repeat(40)}`,
    DAI: '0x7f84437D0bD9a9e0D8957FB394BBfa73893FD957',
    
    WETH: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    
    USDT: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    SAITAMA: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    
    UNI_ROUTER: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    UNI_FACTORY: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    
    SUSHI_ROUTER: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    SUSHI_FACTORY: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    
    FLASH_BOT: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853',

    UNI_PAIR: '0xfD96d20bCB27CD01Bc9C6f2DCb5116a6C9f9Cb5d',
    SUSHI_PAIR: '0xD1d7AD3507302109e660b3bd25E9b0bD56F3d4fc',
}

const VAL = {
    TKN0_SYM: 'SAITAMA',
    TKN1_SYM: 'USDT',
    PRICE_TOKEN0: 0.002,
    PRICE_TOKEN1: 0.003,
    TKN0_NAME: 'saitama',
    TKN1_NAME: 'usdt',
    SUCCESS: 'success',
    FAILURE: 'failure',
}

// bsc testnet = 97
// rinkeby = 4
const CHAIN = {
    BSC: 97,
    LOCAL: 0,
    ETHEREUM: 4,
}

const ABI = {
    I_ERC20: './ABI/IERC20.json',
    PAIR: './ABI/UniswapV2Pair.json',
    F_BOT: path.join(__dirname, './ABI/FlashBot.json'),
    I_PAIR: './ABI/IUniswapV2Pair.json',
    I_FACTORY: './ABI/IUniswapV2Factory.json',
    I_ROUTER: './ABI/IUniswapV2Router02.json',
}

const CONFIG = {
    LOG_LEVEL: 'debug',
    BASE_TOKENS: [
        ADDRESS.USDT
    ],
    GAS_LIMIT: 340000, // units
    MIN_PROFIT_THRESHOLD: 50, // usd
    GAS_PRICE: parseUnits('3', 'gwei'), // in Gwei
    PRICE_URL: 'https://min-api.cryptocompare.com/data/price',
}

export {
    VAL,
    ABI,
    CHAIN,
    CONFIG,
    ADDRESS,
}