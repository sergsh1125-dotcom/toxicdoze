const TOXIC_AGENTS = {
    "Hydrogen cyanide": {
        "id": "Hydrogen cyanide",
        "name": "Hydrogen cyanide",
        "category": "Отруйна речовина",
        "cas": "74-90-8",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "ppm",
        "unit_display": "ppm",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            2.5,
            2.5,
            2.0,
            1.3,
            1.0
        ],
        "AEGL2": [
            17.0,
            10.0,
            7.1,
            3.5,
            2.5
        ],
        "AEGL3": [
            27.0,
            21.0,
            15.0,
            8.6,
            6.6
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "Phosgene": {
        "id": "Phosgene",
        "name": "Phosgene",
        "category": "Отруйна речовина",
        "cas": "75-44-5",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "ppm",
        "unit_display": "ppm",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            null,
            null,
            null,
            null,
            null
        ],
        "AEGL2": [
            0.6,
            0.6,
            0.3,
            0.08,
            0.04
        ],
        "AEGL3": [
            3.6,
            1.5,
            0.75,
            0.2,
            0.09
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "Agent GA (Tabun)": {
        "id": "Agent GA (Tabun)",
        "name": "Agent GA (Tabun)",
        "category": "Отруйна речовина",
        "cas": "77-81-6",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "ppm",
        "unit_display": "mg/m3",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            0.001,
            0.0006,
            0.00042,
            0.00021,
            0.00015
        ],
        "AEGL2": [
            0.013,
            0.087,
            0.0075,
            0.05,
            0.0053
        ],
        "AEGL3": [
            0.11,
            0.76,
            0.057,
            0.38,
            0.039
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "Agent GD (Soman)": {
        "id": "Agent GD (Soman)",
        "name": "Agent GD (Soman)",
        "category": "Отруйна речовина",
        "cas": "96-64-0",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "ppm",
        "unit_display": "mg/m3",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            0.00046,
            0.00026,
            0.00018,
            9.1e-05,
            6.5e-05
        ],
        "AEGL2": [
            0.0057,
            0.044,
            0.0033,
            0.025,
            0.0022
        ],
        "AEGL3": [
            0.049,
            0.38,
            0.025,
            0.19,
            0.017
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "Agent GB (Sarin)": {
        "id": "Agent GB (Sarin)",
        "name": "Agent GB (Sarin)",
        "category": "Отруйна речовина",
        "cas": "107-44-8",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "ppm",
        "unit_display": "mg/m3",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            0.0012,
            0.00068,
            0.00048,
            0.00024,
            0.00017
        ],
        "AEGL2": [
            0.015,
            0.087,
            0.0085,
            0.05,
            0.006
        ],
        "AEGL3": [
            0.064,
            0.38,
            0.032,
            0.19,
            0.022
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "GF Agent": {
        "id": "GF Agent",
        "name": "GF Agent",
        "category": "Отруйна речовина",
        "cas": "329-99-7",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "ppm",
        "unit_display": "mg/m3",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            0.00049,
            0.00028,
            0.0002,
            0.0001,
            7e-05
        ],
        "AEGL2": [
            0.0062,
            0.044,
            0.0035,
            0.025,
            0.0024
        ],
        "AEGL3": [
            0.053,
            0.38,
            0.027,
            0.19,
            0.018
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "Sulfur Mustard": {
        "id": "Sulfur Mustard",
        "name": "Sulfur Mustard",
        "category": "Отруйна речовина",
        "cas": "505-60-2",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "ppm",
        "unit_display": "mg/m3",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            0.06,
            0.02,
            0.01,
            0.003,
            0.001
        ],
        "AEGL2": [
            0.09,
            0.03,
            0.02,
            0.004,
            0.002
        ],
        "AEGL3": [
            0.59,
            0.41,
            0.32,
            0.08,
            0.04
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "Lewisite 1": {
        "id": "Lewisite 1",
        "name": "Lewisite 1",
        "category": "Отруйна речовина",
        "cas": "541-25-3",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "mg/m3",
        "unit_display": "mg/m3",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            null,
            null,
            null,
            null,
            null
        ],
        "AEGL2": [
            1.3,
            0.47,
            0.25,
            0.07,
            0.037
        ],
        "AEGL3": [
            3.9,
            1.4,
            0.74,
            0.21,
            0.11
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "BZ": {
        "id": "BZ",
        "name": "BZ",
        "category": "Отруйна речовина",
        "cas": "6581-06-2",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "mg/m3",
        "unit_display": "mg/m3",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            null,
            null,
            null,
            null,
            null
        ],
        "AEGL2": [
            0.067,
            0.022,
            0.011,
            null,
            null
        ],
        "AEGL3": [
            1.2,
            0.41,
            0.21,
            null,
            null
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    },
    "Agent VX": {
        "id": "Agent VX",
        "name": "Agent VX",
        "category": "Отруйна речовина",
        "cas": "50782-69-9",
        "formula": null,
        "un_number": null,
        "physical_state": null,
        "molecular_weight": null,
        "unit_source": "ppm",
        "unit_display": "mg/m3",
        "times_min": [
            10,
            30,
            60,
            240,
            480
        ],
        "AEGL1": [
            5.2e-05,
            3e-05,
            1.6e-05,
            9.1e-06,
            6.5e-06
        ],
        "AEGL2": [
            0.00065,
            0.00038,
            0.00027,
            0.00014,
            9.5e-05
        ],
        "AEGL3": [
            0.0027,
            0.0014,
            0.00091,
            0.00048,
            0.00035
        ],
        "status": "Final",
        "source": "U.S. AEGL Compiled Values, July 27, 2018",
        "source_note": null
    }
};
