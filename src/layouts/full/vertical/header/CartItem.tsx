import React from 'react';
import { Box, Typography, Avatar, Stack, ButtonGroup, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconMinus, IconPlus } from '@tabler/icons';
import { useSelector, useDispatch } from 'src/store/Store';
import emptyCart from 'src/assets/images/products/empty-shopping-bag.gif';
import { increment, decrement } from 'src/store/apps/eCommerce/ECommerceSlice';
import { AppState } from 'src/store/Store';

const CartItems = () => {
  const dispatch = useDispatch();

  // Get Products
  const Cartproduct = useSelector((state: AppState) => state.ecommerceReducer.cart);

  const Increase = (productId: string) => {
    dispatch(increment(productId));
  };

  const Decrease = (productId: string) => {
    dispatch(decrement(productId));
  };

  return (
    <Box px={3}>
      {Cartproduct.length > 0 ? (
        <>
          {Cartproduct.map((product: any, index: number) => (
            <Box key={product.id + index * index}>
              <Stack direction="row" spacing={2} py={3}>
                <Avatar
                  src={product.photo}
                  alt={product.photo}
                  sx={{
                    borderRadius: '10px',
                    height: '75px',
                    width: '95px',
                  }}
                />
                <Box>
                  <Typography variant="subtitle2" color="textPrimary" fontWeight={600}>
                    {product.title}
                  </Typography>{' '}
                  <Typography color="textSecondary" fontSize="12px">
                    {' '}
                    {product.category}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={2} mt="5px">
                    <Typography variant="subtitle2" fontWeight="500"> 
                      ${product.price * product.qty}
                    </Typography>
                    <ButtonGroup size="small"  aria-label="small button group">
                      <Button color="success" className="btn-xs" variant='text' onClick={() => Decrease(product.id)} disabled={product.qty < 2}>
                        <IconMinus stroke={1.5} size="0.8rem" />
                      </Button>
                      <Button color="inherit" sx={{bgcolor: 'transparent', color: 'text.secondary'}} variant="text">{product.qty}</Button>
                      <Button color="success" className="btn-xs" variant='text' onClick={() => Increase(product.id)}>
                        <IconPlus stroke={1.5} size="0.8rem" />
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          ))}
        </>
      ) : (
        <Box textAlign="center" mb={3}>
          <img src={emptyCart} alt="cart" width="200px" />
          <Typography variant="h5" mb={2}>
            Cart is Empty
          </Typography>
          <Button component={Link} to="/apps/ecommerce/shop" variant="contained">
            Go back to Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CartItems;
