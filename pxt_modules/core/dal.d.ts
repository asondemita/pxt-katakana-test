// Auto-generated. Do not edit.
declare const enum DAL {
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/ExternalEvents.h
    MICROBIT_ID_BLE = 1000,
    MICROBIT_ID_BLE_UART = 1200,
    MICROBIT_BLE_EVT_CONNECTED = 1,
    MICROBIT_BLE_EVT_DISCONNECTED = 2,
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MESEvents.h
    MES_REMOTE_CONTROL_ID = 1001,
    MES_REMOTE_CONTROL_EVT_PLAY = 1,
    MES_REMOTE_CONTROL_EVT_PAUSE = 2,
    MES_REMOTE_CONTROL_EVT_STOP = 3,
    MES_REMOTE_CONTROL_EVT_NEXTTRACK = 4,
    MES_REMOTE_CONTROL_EVT_PREVTRACK = 5,
    MES_REMOTE_CONTROL_EVT_FORWARD = 6,
    MES_REMOTE_CONTROL_EVT_REWIND = 7,
    MES_REMOTE_CONTROL_EVT_VOLUMEUP = 8,
    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN = 9,
    MES_CAMERA_ID = 1002,
    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE = 1,
    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE = 2,
    MES_CAMERA_EVT_TAKE_PHOTO = 3,
    MES_CAMERA_EVT_START_VIDEO_CAPTURE = 4,
    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE = 5,
    MES_CAMERA_EVT_STOP_PHOTO_MODE = 6,
    MES_CAMERA_EVT_STOP_VIDEO_MODE = 7,
    MES_CAMERA_EVT_TOGGLE_FRONT_REAR = 8,
    MES_ALERTS_ID = 1004,
    MES_ALERT_EVT_DISPLAY_TOAST = 1,
    MES_ALERT_EVT_VIBRATE = 2,
    MES_ALERT_EVT_PLAY_SOUND = 3,
    MES_ALERT_EVT_PLAY_RINGTONE = 4,
    MES_ALERT_EVT_FIND_MY_PHONE = 5,
    MES_ALERT_EVT_ALARM1 = 6,
    MES_ALERT_EVT_ALARM2 = 7,
    MES_ALERT_EVT_ALARM3 = 8,
    MES_ALERT_EVT_ALARM4 = 9,
    MES_ALERT_EVT_ALARM5 = 10,
    MES_ALERT_EVT_ALARM6 = 11,
    MES_SIGNAL_STRENGTH_ID = 1101,
    MES_SIGNAL_STRENGTH_EVT_NO_BAR = 1,
    MES_SIGNAL_STRENGTH_EVT_ONE_BAR = 2,
    MES_SIGNAL_STRENGTH_EVT_TWO_BAR = 3,
    MES_SIGNAL_STRENGTH_EVT_THREE_BAR = 4,
    MES_SIGNAL_STRENGTH_EVT_FOUR_BAR = 5,
    MES_DEVICE_INFO_ID = 1103,
    MES_DEVICE_ORIENTATION_LANDSCAPE = 1,
    MES_DEVICE_ORIENTATION_PORTRAIT = 2,
    MES_DEVICE_GESTURE_NONE = 3,
    MES_DEVICE_GESTURE_DEVICE_SHAKEN = 4,
    MES_DEVICE_DISPLAY_OFF = 5,
    MES_DEVICE_DISPLAY_ON = 6,
    MES_DEVICE_INCOMING_CALL = 7,
    MES_DEVICE_INCOMING_MESSAGE = 8,
    MES_DPAD_CONTROLLER_ID = 1104,
    MES_DPAD_BUTTON_A_DOWN = 1,
    MES_DPAD_BUTTON_A_UP = 2,
    MES_DPAD_BUTTON_B_DOWN = 3,
    MES_DPAD_BUTTON_B_UP = 4,
    MES_DPAD_BUTTON_C_DOWN = 5,
    MES_DPAD_BUTTON_C_UP = 6,
    MES_DPAD_BUTTON_D_DOWN = 7,
    MES_DPAD_BUTTON_D_UP = 8,
    MES_DPAD_BUTTON_1_DOWN = 9,
    MES_DPAD_BUTTON_1_UP = 10,
    MES_DPAD_BUTTON_2_DOWN = 11,
    MES_DPAD_BUTTON_2_UP = 12,
    MES_DPAD_BUTTON_3_DOWN = 13,
    MES_DPAD_BUTTON_3_UP = 14,
    MES_DPAD_BUTTON_4_DOWN = 15,
    MES_DPAD_BUTTON_4_UP = 16,
    MES_BROADCAST_GENERAL_ID = 2000,
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitAccelerometerService.h
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitBLEManager.h
    MICROBIT_BLE_PAIR_REQUEST = 0x01,
    MICROBIT_BLE_PAIR_COMPLETE = 0x02,
    MICROBIT_BLE_PAIR_PASSCODE = 0x04,
    MICROBIT_BLE_PAIR_SUCCESSFUL = 0x08,
    MICROBIT_BLE_PAIRING_TIMEOUT = 90,
    MICROBIT_BLE_POWER_LEVELS = 8,
    MICROBIT_BLE_MAXIMUM_BONDS = 4,
    MICROBIT_BLE_EDDYSTONE_ADV_INTERVAL = 400,
    MICROBIT_BLE_EDDYSTONE_DEFAULT_POWER = 0xF0,
    MICROBIT_BLE_STATUS_STORE_SYSATTR = 0x02,
    MICROBIT_BLE_STATUS_DISCONNECT = 0x04,
    MICROBIT_BLE_DISCONNECT_AFTER_PAIRING_DELAY = 500,
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitButtonService.h
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitDFUService.h
    MICROBIT_DFU_OPCODE_START_DFU = 1,
    MICROBIT_DFU_HISTOGRAM_WIDTH = 5,
    MICROBIT_DFU_HISTOGRAM_HEIGHT = 5,
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitEddystone.h
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitEventService.h
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitIOPinService.h
    MICROBIT_IO_PIN_SERVICE_PINCOUNT = 19,
    MICROBIT_IO_PIN_SERVICE_DATA_SIZE = 10,
    MICROBIT_PWM_PIN_SERVICE_DATA_SIZE = 2,
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitLEDService.h
    MICROBIT_BLE_MAXIMUM_SCROLLTEXT = 20,
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitMagnetometerService.h
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitTemperatureService.h
    // built/yt/yotta_modules/microbit-dal/inc/bluetooth/MicroBitUARTService.h
    MICROBIT_UART_S_DEFAULT_BUF_SIZE = 20,
    MICROBIT_UART_S_EVT_DELIM_MATCH = 1,
    MICROBIT_UART_S_EVT_HEAD_MATCH = 2,
    MICROBIT_UART_S_EVT_RX_FULL = 3,
    // built/yt/yotta_modules/microbit-dal/inc/core/ErrorNo.h
    MICROBIT_OK = 0,
    MICROBIT_INVALID_PARAMETER = -1001,
    MICROBIT_NOT_SUPPORTED = -1002,
    MICROBIT_CALIBRATION_IN_PROGRESS = -1003,
    MICROBIT_CALIBRATION_REQUIRED = -1004,
    MICROBIT_NO_RESOURCES = -1005,
    MICROBIT_BUSY = -1006,
    MICROBIT_CANCELLED = -1007,
    MICROBIT_I2C_ERROR = -1010,
    MICROBIT_SERIAL_IN_USE = -1011,
    MICROBIT_NO_DATA = -1012,
    MICROBIT_OOM = 20,
    MICROBIT_HEAP_ERROR = 30,
    MICROBIT_NULL_DEREFERENCE = 40,
    // built/yt/yotta_modules/microbit-dal/inc/core/EventModel.h
    // built/yt/yotta_modules/microbit-dal/inc/core/MemberFunctionCallback.h
    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitCompat.h
    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitComponent.h
    MICROBIT_ID_BUTTON_A = 1,
    MICROBIT_ID_BUTTON_B = 2,
    MICROBIT_ID_BUTTON_RESET = 3,
    MICROBIT_ID_ACCELEROMETER = 4,
    MICROBIT_ID_COMPASS = 5,
    MICROBIT_ID_DISPLAY = 6,
    MICROBIT_IO_PINS = 20,
    MICROBIT_ID_IO_P0 = 7,
    MICROBIT_ID_IO_P1 = 8,
    MICROBIT_ID_IO_P2 = 9,
    MICROBIT_ID_IO_P3 = 10,
    MICROBIT_ID_IO_P4 = 11,
    MICROBIT_ID_IO_P5 = 12,
    MICROBIT_ID_IO_P6 = 13,
    MICROBIT_ID_IO_P7 = 14,
    MICROBIT_ID_IO_P8 = 15,
    MICROBIT_ID_IO_P9 = 16,
    MICROBIT_ID_IO_P10 = 17,
    MICROBIT_ID_IO_P11 = 18,
    MICROBIT_ID_IO_P12 = 19,
    MICROBIT_ID_IO_P13 = 20,
    MICROBIT_ID_IO_P14 = 21,
    MICROBIT_ID_IO_P15 = 22,
    MICROBIT_ID_IO_P16 = 23,
    MICROBIT_ID_IO_P19 = 24,
    MICROBIT_ID_IO_P20 = 25,
    MICROBIT_ID_BUTTON_AB = 26,
    MICROBIT_ID_GESTURE = 27,
    MICROBIT_ID_THERMOMETER = 28,
    MICROBIT_ID_RADIO = 29,
    MICROBIT_ID_RADIO_DATA_READY = 30,
    MICROBIT_ID_MULTIBUTTON_ATTACH = 31,
    MICROBIT_ID_SERIAL = 32,
    MICROBIT_ID_MESSAGE_BUS_LISTENER = 1021,
    MICROBIT_ID_NOTIFY_ONE = 1022,
    MICROBIT_ID_NOTIFY = 1023,
    MICROBIT_COMPONENT_RUNNING = 0x01,
    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitDevice.h
    MICROBIT_NAME_LENGTH = 5,
    MICROBIT_NAME_CODE_LETTERS = 5,
    MICROBIT_PANIC_ERROR_CHARS = 4,
    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitFiber.h
    MICROBIT_SCHEDULER_RUNNING = 0x01,
    MICROBIT_FIBER_FLAG_FOB = 0x01,
    MICROBIT_FIBER_FLAG_PARENT = 0x02,
    MICROBIT_FIBER_FLAG_CHILD = 0x04,
    MICROBIT_FIBER_FLAG_DO_NOT_PAGE = 0x08,
    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitFont.h
    MICROBIT_FONT_WIDTH = 5,
    MICROBIT_FONT_HEIGHT = 5,
    MICROBIT_FONT_ASCII_START = 32,
    MICROBIT_FONT_ASCII_END = 126,
    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitHeapAllocator.h
    MICROBIT_MAXIMUM_HEAPS = 2,
    MICROBIT_HEAP_BLOCK_FREE = 0x80000000,
    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitListener.h
    MESSAGE_BUS_LISTENER_PARAMETERISED = 0x0001,
    MESSAGE_BUS_LISTENER_METHOD = 0x0002,
    MESSAGE_BUS_LISTENER_BUSY = 0x0004,
    MESSAGE_BUS_LISTENER_REENTRANT = 0x0008,
    MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY = 0x0010,
    MESSAGE_BUS_LISTENER_DROP_IF_BUSY = 0x0020,
    MESSAGE_BUS_LISTENER_NONBLOCKING = 0x0040,
    MESSAGE_BUS_LISTENER_URGENT = 0x0080,
    MESSAGE_BUS_LISTENER_DELETING = 0x8000,
    // built/yt/yotta_modules/microbit-dal/inc/core/MicroBitSystemTimer.h
    // built/yt/yotta_modules/microbit-dal/inc/core/NotifyEvents.h
    MICROBIT_DISPLAY_EVT_FREE = 1,
    MICROBIT_SERIAL_EVT_TX_EMPTY = 2,
    MICROBIT_UART_S_EVT_TX_EMPTY = 3,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/DynamicPwm.h
    MICROBIT_DEFAULT_PWM_PERIOD = 20000,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitAccelerometer.h
    MICROBIT_ACCEL_PITCH_ROLL_VALID = 0x02,
    MICROBIT_ACCEL_ADDED_TO_IDLE = 0x04,
    MMA8653_DEFAULT_ADDR = 0x3A,
    MMA8653_STATUS = 0x00,
    MMA8653_OUT_X_MSB = 0x01,
    MMA8653_WHOAMI = 0x0D,
    MMA8653_XYZ_DATA_CFG = 0x0E,
    MMA8653_CTRL_REG1 = 0x2A,
    MMA8653_CTRL_REG2 = 0x2B,
    MMA8653_CTRL_REG3 = 0x2C,
    MMA8653_CTRL_REG4 = 0x2D,
    MMA8653_CTRL_REG5 = 0x2E,
    MMA8653_WHOAMI_VAL = 0x5A,
    MMA8653_SAMPLE_RANGES = 3,
    MMA8653_SAMPLE_RATES = 8,
    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE = 1,
    MICROBIT_ACCELEROMETER_EVT_NONE = 0,
    MICROBIT_ACCELEROMETER_EVT_TILT_UP = 1,
    MICROBIT_ACCELEROMETER_EVT_TILT_DOWN = 2,
    MICROBIT_ACCELEROMETER_EVT_TILT_LEFT = 3,
    MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT = 4,
    MICROBIT_ACCELEROMETER_EVT_FACE_UP = 5,
    MICROBIT_ACCELEROMETER_EVT_FACE_DOWN = 6,
    MICROBIT_ACCELEROMETER_EVT_FREEFALL = 7,
    MICROBIT_ACCELEROMETER_EVT_3G = 8,
    MICROBIT_ACCELEROMETER_EVT_6G = 9,
    MICROBIT_ACCELEROMETER_EVT_8G = 10,
    MICROBIT_ACCELEROMETER_EVT_SHAKE = 11,
    MICROBIT_ACCELEROMETER_REST_TOLERANCE = 200,
    MICROBIT_ACCELEROMETER_TILT_TOLERANCE = 200,
    MICROBIT_ACCELEROMETER_FREEFALL_TOLERANCE = 400,
    MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE = 400,
    MICROBIT_ACCELEROMETER_3G_TOLERANCE = 3072,
    MICROBIT_ACCELEROMETER_6G_TOLERANCE = 6144,
    MICROBIT_ACCELEROMETER_8G_TOLERANCE = 8192,
    MICROBIT_ACCELEROMETER_GESTURE_DAMPING = 5,
    MICROBIT_ACCELEROMETER_SHAKE_DAMPING = 10,
    MICROBIT_ACCELEROMETER_SHAKE_RTX = 30,
    MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitButton.h
    MICROBIT_BUTTON_EVT_DOWN = 1,
    MICROBIT_BUTTON_EVT_UP = 2,
    MICROBIT_BUTTON_EVT_CLICK = 3,
    MICROBIT_BUTTON_EVT_LONG_CLICK = 4,
    MICROBIT_BUTTON_EVT_HOLD = 5,
    MICROBIT_BUTTON_EVT_DOUBLE_CLICK = 6,
    MICROBIT_BUTTON_LONG_CLICK_TIME = 1000,
    MICROBIT_BUTTON_HOLD_TIME = 1500,
    MICROBIT_BUTTON_STATE = 1,
    MICROBIT_BUTTON_STATE_HOLD_TRIGGERED = 2,
    MICROBIT_BUTTON_STATE_CLICK = 4,
    MICROBIT_BUTTON_STATE_LONG_CLICK = 8,
    MICROBIT_BUTTON_SIGMA_MIN = 0,
    MICROBIT_BUTTON_SIGMA_MAX = 12,
    MICROBIT_BUTTON_SIGMA_THRESH_HI = 8,
    MICROBIT_BUTTON_SIGMA_THRESH_LO = 2,
    MICROBIT_BUTTON_DOUBLE_CLICK_THRESH = 50,
    MICROBIT_BUTTON_SIMPLE_EVENTS = 0,
    MICROBIT_BUTTON_ALL_EVENTS = 1,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitCompass.h
    MAG3110_DEFAULT_ADDR = 0x1D,
    MAG_DR_STATUS = 0x00,
    MAG_OUT_X_MSB = 0x01,
    MAG_OUT_X_LSB = 0x02,
    MAG_OUT_Y_MSB = 0x03,
    MAG_OUT_Y_LSB = 0x04,
    MAG_OUT_Z_MSB = 0x05,
    MAG_OUT_Z_LSB = 0x06,
    MAG_WHOAMI = 0x07,
    MAG_SYSMOD = 0x08,
    MAG_OFF_X_MSB = 0x09,
    MAG_OFF_X_LSB = 0x0A,
    MAG_OFF_Y_MSB = 0x0B,
    MAG_OFF_Y_LSB = 0x0C,
    MAG_OFF_Z_MSB = 0x0D,
    MAG_OFF_Z_LSB = 0x0E,
    MAG_DIE_TEMP = 0x0F,
    MAG_CTRL_REG1 = 0x10,
    MAG_CTRL_REG2 = 0x11,
    MAG3110_SAMPLE_RATES = 11,
    MICROBIT_COMPASS_EVT_CAL_REQUIRED = 1,
    MICROBIT_COMPASS_EVT_CAL_START = 2,
    MICROBIT_COMPASS_EVT_CAL_END = 3,
    MICROBIT_COMPASS_EVT_DATA_UPDATE = 4,
    MICROBIT_COMPASS_EVT_CONFIG_NEEDED = 5,
    MICROBIT_COMPASS_EVT_CALIBRATE = 6,
    MICROBIT_COMPASS_STATUS_CALIBRATED = 2,
    MICROBIT_COMPASS_STATUS_CALIBRATING = 4,
    MICROBIT_COMPASS_STATUS_ADDED_TO_IDLE = 8,
    MAG3110_WHOAMI_VAL = 0xC4,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitCompassCalibrator.h
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitDisplay.h
    MICROBIT_DISPLAY_EVT_ANIMATION_COMPLETE = 1,
    MICROBIT_DISPLAY_EVT_LIGHT_SENSE = 2,
    MICROBIT_DISPLAY_DEFAULT_AUTOCLEAR = 1,
    MICROBIT_DISPLAY_SPACING = 1,
    MICROBIT_DISPLAY_GREYSCALE_BIT_DEPTH = 8,
    MICROBIT_DISPLAY_ANIMATE_DEFAULT_POS = -255,
    ANIMATION_MODE_NONE = 0,
    ANIMATION_MODE_STOPPED = 1,
    ANIMATION_MODE_SCROLL_TEXT = 2,
    ANIMATION_MODE_PRINT_TEXT = 3,
    ANIMATION_MODE_SCROLL_IMAGE = 4,
    ANIMATION_MODE_ANIMATE_IMAGE = 5,
    ANIMATION_MODE_ANIMATE_IMAGE_WITH_CLEAR = 6,
    ANIMATION_MODE_PRINT_CHARACTER = 7,
    DISPLAY_MODE_BLACK_AND_WHITE = 0,
    DISPLAY_MODE_GREYSCALE = 1,
    DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE = 2,
    MICROBIT_DISPLAY_ROTATION_0 = 0,
    MICROBIT_DISPLAY_ROTATION_90 = 1,
    MICROBIT_DISPLAY_ROTATION_180 = 2,
    MICROBIT_DISPLAY_ROTATION_270 = 3,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitFile.h
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitFileSystem.h
    MBFS_FILENAME_LENGTH = 16,
    MB_READ = 0x01,
    MB_WRITE = 0x02,
    MB_CREAT = 0x04,
    MB_APPEND = 0x08,
    MB_SEEK_SET = 0x01,
    MB_SEEK_END = 0x02,
    MB_SEEK_CUR = 0x04,
    MBFS_STATUS_INITIALISED = 0x01,
    MBFS_UNUSED = 0xFFFF,
    MBFS_EOF = 0xEFFF,
    MBFS_DELETED = 0x0000,
    MBFS_DIRECTORY_ENTRY_FREE = 0x8000,
    MBFS_DIRECTORY_ENTRY_VALID = 0x4000,
    MBFS_DIRECTORY_ENTRY_DIRECTORY = 0x2000,
    MBFS_DIRECTORY_ENTRY_NEW = 0xffff,
    MBFS_DIRECTORY_ENTRY_DELETED = 0x0000,
    MBFS_BLOCK_TYPE_FILE = 1,
    MBFS_BLOCK_TYPE_DIRECTORY = 2,
    MBFS_BLOCK_TYPE_FILETABLE = 3,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitFlash.h
    PAGE_SIZE = 1024,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitI2C.h
    MICROBIT_I2C_MAX_RETRIES = 9,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitIO.h
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitLightSensor.h
    MICROBIT_LIGHT_SENSOR_CHAN_NUM = 3,
    MICROBIT_LIGHT_SENSOR_AN_SET_TIME = 4000,
    MICROBIT_LIGHT_SENSOR_TICK_PERIOD = 5,
    MICROBIT_LIGHT_SENSOR_MAX_VALUE = 338,
    MICROBIT_LIGHT_SENSOR_MIN_VALUE = 75,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitMatrixMaps.h
    NO_CONN = 0,
    MICROBIT_DISPLAY_WIDTH = 5,
    MICROBIT_DISPLAY_HEIGHT = 5,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitMessageBus.h
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitMultiButton.h
    MICROBIT_MULTI_BUTTON_STATE_1 = 0x01,
    MICROBIT_MULTI_BUTTON_STATE_2 = 0x02,
    MICROBIT_MULTI_BUTTON_HOLD_TRIGGERED_1 = 0x04,
    MICROBIT_MULTI_BUTTON_HOLD_TRIGGERED_2 = 0x08,
    MICROBIT_MULTI_BUTTON_SUPRESSED_1 = 0X10,
    MICROBIT_MULTI_BUTTON_SUPRESSED_2 = 0x20,
    MICROBIT_MULTI_BUTTON_ATTACHED = 0x40,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitPin.h
    IO_STATUS_DIGITAL_IN = 0x01,
    IO_STATUS_DIGITAL_OUT = 0x02,
    IO_STATUS_ANALOG_IN = 0x04,
    IO_STATUS_ANALOG_OUT = 0x08,
    IO_STATUS_TOUCH_IN = 0x10,
    IO_STATUS_EVENT_ON_EDGE = 0x20,
    IO_STATUS_EVENT_PULSE_ON_EDGE = 0x40,
    MICROBIT_PIN_MAX_OUTPUT = 1023,
    MICROBIT_PIN_MAX_SERVO_RANGE = 180,
    MICROBIT_PIN_DEFAULT_SERVO_RANGE = 2000,
    MICROBIT_PIN_DEFAULT_SERVO_CENTER = 1500,
    MICROBIT_PIN_EVENT_NONE = 0,
    MICROBIT_PIN_EVENT_ON_EDGE = 1,
    MICROBIT_PIN_EVENT_ON_PULSE = 2,
    MICROBIT_PIN_EVENT_ON_TOUCH = 3,
    MICROBIT_PIN_EVT_RISE = 2,
    MICROBIT_PIN_EVT_FALL = 3,
    MICROBIT_PIN_EVT_PULSE_HI = 4,
    MICROBIT_PIN_EVT_PULSE_LO = 5,
    PIN_CAPABILITY_DIGITAL_IN = 0x01,
    PIN_CAPABILITY_DIGITAL_OUT = 0x02,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitQuadratureDecoder.h
    QDEC_USE_SYSTEM_TICK = 0x01,
    QDEC_USE_DEBOUNCE = 0x02,
    QDEC_LED_ACTIVE_LOW = 0x04,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitRadio.h
    MICROBIT_RADIO_STATUS_INITIALISED = 0x0001,
    MICROBIT_RADIO_BASE_ADDRESS = 0x75626974,
    MICROBIT_RADIO_DEFAULT_GROUP = 0,
    MICROBIT_RADIO_DEFAULT_TX_POWER = 6,
    MICROBIT_RADIO_DEFAULT_FREQUENCY = 7,
    MICROBIT_RADIO_MAX_PACKET_SIZE = 32,
    MICROBIT_RADIO_HEADER_SIZE = 4,
    MICROBIT_RADIO_MAXIMUM_RX_BUFFERS = 4,
    MICROBIT_RADIO_PROTOCOL_DATAGRAM = 1,
    MICROBIT_RADIO_PROTOCOL_EVENTBUS = 2,
    MICROBIT_RADIO_EVT_DATAGRAM = 1,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitRadioDatagram.h
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitRadioEvent.h
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitSerial.h
    MICROBIT_SERIAL_DEFAULT_BAUD_RATE = 115200,
    MICROBIT_SERIAL_DEFAULT_BUFFER_SIZE = 20,
    MICROBIT_SERIAL_EVT_DELIM_MATCH = 1,
    MICROBIT_SERIAL_EVT_HEAD_MATCH = 2,
    MICROBIT_SERIAL_EVT_RX_FULL = 3,
    MICROBIT_SERIAL_RX_IN_USE = 1,
    MICROBIT_SERIAL_TX_IN_USE = 2,
    MICROBIT_SERIAL_RX_BUFF_INIT = 4,
    MICROBIT_SERIAL_TX_BUFF_INIT = 8,
    ASYNC = 0,
    SYNC_SPINWAIT = 1,
    SYNC_SLEEP = 2,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitStorage.h
    MICROBIT_STORAGE_MAGIC = 0xCAFE,
    MICROBIT_STORAGE_BLOCK_SIZE = 48,
    MICROBIT_STORAGE_KEY_SIZE = 16,
    MICROBIT_STORAGE_STORE_PAGE_OFFSET = 17,
    MICROBIT_STORAGE_SCRATCH_PAGE_OFFSET = 19,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/MicroBitThermometer.h
    MICROBIT_THERMOMETER_PERIOD = 1000,
    MICROBIT_THERMOMETER_EVT_UPDATE = 1,
    MICROBIT_THERMOMETER_ADDED_TO_IDLE = 2,
    // built/yt/yotta_modules/microbit-dal/inc/drivers/TimedInterruptIn.h
    // built/yt/yotta_modules/microbit-dal/inc/platform/yotta_cfg_mappings.h
    // built/yt/yotta_modules/microbit-dal/inc/types/ManagedString.h
    // built/yt/yotta_modules/microbit-dal/inc/types/ManagedType.h
    // built/yt/yotta_modules/microbit-dal/inc/types/Matrix4.h
    // built/yt/yotta_modules/microbit-dal/inc/types/MicroBitCoordinateSystem.h
    RAW = 0,
    SIMPLE_CARTESIAN = 1,
    NORTH_EAST_DOWN = 2,
    // built/yt/yotta_modules/microbit-dal/inc/types/MicroBitEvent.h
    MICROBIT_ID_ANY = 0,
    MICROBIT_EVT_ANY = 0,
    CREATE_ONLY = 0,
    CREATE_AND_FIRE = 1,
    // built/yt/yotta_modules/microbit-dal/inc/types/MicroBitImage.h
    // built/yt/yotta_modules/microbit-dal/inc/types/PacketBuffer.h
    // built/yt/yotta_modules/microbit-dal/inc/types/RefCounted.h
}
