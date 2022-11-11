# AIR-BACKEND

## Requirement

- Python3 > 3.10.x

## Development Installation
First, create a python virtual environment by running one of the command bellow on the backend root directory.

    $ python3 -m venv .venv
    $ python -m venv .venv
    $ py -m venv .venv

Second, activate the virtual environment from the directory where u installed the virtual environment, as shown bellow:

    $ .venv\Scripts\activate # Windows
    $ .venv/Scripts/activate # Linux

Third, once you are in the virtual environment you can then install the dependancy from the requirements file.

    $ python3 -m pip install -r requirements.txt
    $ python -m pip install -r requirements.txt
    $ py -m pip install -r requirements.txt 

## Dev Serving

    $ cd air_backend
    /air_backend $ py manage.py runserver
